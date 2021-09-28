-- For the products table:

-- Select the product whose stock has the most value (use sale price)
select id, name, price, sale_price, remaining_quantity, sale_price * remaining_quantity as value from products order by value desc limit 1;

-- Select the most expensive product whose price is between 25 and 50 with remaining quantity
select id, name, price, sale_price, remaining_quantity, sale_price * remaining_quantity as value from products where price > 25 and price < 50 order by value desc limit 1;

-- Select all products on sale with remaining quantity ordered by their price and then their name
select id, name, price, sale_price, remaining_quantity from products where remaining_quantity > 0 order by price, name;

-- Select the second set 20 results based on the previous query
select id, name, price, sale_price, remaining_quantity from products where remaining_quantity > 0 order by price, name limit 20 offset 20;

-- Find the average price of all products
select AVG(price) as average_price from products;

-- Find the average sale_price of all products that are on sale
select AVG(sale_price) as average_price from products where price != sale_price;

-- Find the average price of all products that are on sale with remaining quantity
select AVG(sale_price) as average_price from products where price != sale_price and remaining_quantity > 0;

-- Update all the products whose name contains `paper` (case insensitive) to have a remaining quantity of 0
update products set remaining_quantity = 0 where name ilike '%paper%';

-- Update all the products whose name contains `paper` or `steel` to have a remaining quantity of a random number between 5 and 25
update products set remaining_quantity = (SELECT floor(random() * (25 - 5 + 1)) + 5) where name ilike '%paper%' or name ilike '%steel%';

-- Select the second set of 10 cheapest products (by `price` or `sale_price`) with remaining quantity
select id, name, price, sale_price, remaining_quantity from  products where remaining_quantity > 0 order by price asc limit 10 offset 10;

-- Build a query that groups the products by their sale price and show the number of products in that price and the sum of remaining quantity. Label the count `product_count`
select sale_price, Count(sale_price) as product_count, SUM(remaining_quantity) as quantity from products group by sale_price limit 10;

-- [stretch] Update the most expensive product to have double its quantity in a single query
-- update products
--  set remaining_quantity = remaining_quantity * 2
--  where id = (select id from products order by price desc limit 1);