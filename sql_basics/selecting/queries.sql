-- From the students table:
-- Select the first 10 students whose ages are between 35 and 45.
select first_name, last_name, age from students where age > 35 and age < 45 limit 10;
-- Select the third set of 10 students whose ages are more than 25 and whose first names contain `le`. The students must be ordered by their id in ascending order then first name in a descending order.
select first_name, last_name, age from students where age > 25 and first_name like '%le%' order by id asc, first_name desc limit 10 offset 20;
-- Select the 10 oldest students (You should ignore students with an age that is `NULL`).
select first_name, last_name, age from students where age is not null order by age desc limit 10;
-- Select all students with age 45 whose last names contain the letter n.
select first_name, last_name, age from students where age = 45 and last_name like '%n%'

-- From the products table:
-- Select all the products that are on sale.
select id, name, price, sale_price, remaining_quantity from products where price != sale_price;
-- Select all the products that are on sale and have remaining items in stock ordered by the sale price in ascending order.
select id, name, price, sale_price, remaining_quantity from products where price != sale_price  and remaining_quantity > 0 order by sale_price asc;
-- Select all the products priced between 25 and 50 (regular price) and that are on sale.
select id, name, price, sale_price, remaining_quantity from products where price < 50 and price > 25 and price != sale_price