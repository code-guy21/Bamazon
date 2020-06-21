const mysql = require("mysql2");
const inquirer = require("inquirer");
require("dotenv").config();

let connection = mysql.createConnection({
  port: 3306,
  user: "root",
  password: process.env.DB_PASS,
  database: "bamazon",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log(res);
  });
});
