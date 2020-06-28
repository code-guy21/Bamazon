const mysql = require("mysql2");
const inquirer = require("inquirer");

let inventory = [];

console.log("\nWelcome to Bamazon\n");

let connection = mysql.createConnection({
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon",
});

connection.connect(function (err) {
  if (err) throw err;
  bamazon();
});

function fetchInventory() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    inventory = [...res];
  });
}

function bamazon() {
  fetchInventory();

  inquirer
    .prompt([
      {
        name: "menu",
        message: "Choose an option",
        type: "list",
        choices: ["inventory", "exit"],
      },
    ])
    .then((resp) => {
      if (resp.menu === "inventory") {
        inventory.forEach((product) => {
          console.log(
            `\nid: ${product.item_id}\nname: ${product.product_name}\ndepartment: ${product.department_name}\nprice: $${product.price}\nstock: ${product.stock_quantity}`
          );
        });
        console.log("\n");
        inquirer
          .prompt([
            {
              name: "product",
              type: "number",
              message: "enter id of item",
            },
            {
              name: "quantity",
              message: "enter quantity",
            },
          ])
          .then((resp) => {
            let item = inventory.find((x) => x.item_id === resp.product);

            if (!item) {
              console.log("\nitem not found\n");
              bamazon();
            } else {
              if (resp.quantity > item.stock_quantity) {
                console.log("\nnot enough inventory\n");
                bamazon();
              } else {
                connection.query(
                  "update products set ? where ?",
                  [
                    {
                      stock_quantity: item.stock_quantity - resp.quantity,
                    },
                    {
                      item_id: resp.product,
                    },
                  ],
                  function (err, res) {
                    if (err) throw err;
                    console.log("\npurchase successful");
                    console.log(`\nTotal: $${item.price * resp.quantity}\n`);
                    bamazon();
                  }
                );
              }
            }
          });
      } else if (resp.menu === "exit") {
        connection.end();
      }
    });
}
