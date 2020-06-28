drop database if exists bamazon;

create database bamazon;

use bamazon;

create table products (
	item_id int primary key auto_increment,
    product_name varchar(100),
    department_name varchar(100),
    price decimal(10,2),
    stock_quantity int
);

insert into products (product_name,department_name,price,stock_quantity)
values ('PS5', 'video games', 1000, 5);

insert into products (product_name,department_name,price,stock_quantity)
values ('Xbox Series X', 'video games', 900, 6);

insert into products (product_name,department_name,price,stock_quantity)
values ('Airpods Pro', 'audio', 230, 9);

insert into products (product_name,department_name,price,stock_quantity)
values ('Mechanical Keyboard', 'computer accessories', 50, 25);

insert into products (product_name,department_name,price,stock_quantity)
values ('Gaming Monitor', 'computer accessories', 500, 20);

insert into products (product_name,department_name,price,stock_quantity)
values ('Fitbit', 'fitness', 150, 23);

insert into products (product_name,department_name,price,stock_quantity)
values ('Bluetooth speakers', 'audio', 100, 33);

insert into products (product_name,department_name,price,stock_quantity)
values ('Camera', 'photos', 600, 14);

insert into products (product_name,department_name,price,stock_quantity)
values ('Vacuum', 'home', 50, 40);

insert into products (product_name,department_name,price,stock_quantity)
values ('Fender Stratocaster', 'instruments', 660, 8);

insert into products (product_name,department_name,price,stock_quantity)
values ('Steinway Piano', 'instruments', 15000, 1);