-- From the students table:

-- Find the number of students named 'Elinore'.
select Count(*) from students where first_name = 'Elinore';

-- List the `first_name`s that occur more than once in students, with the number occurrences of that name.
select first_name, count(*) as occourence from students group by first_name having count(*) > 1 order by occourence desc limit 10; 

-- Refine the above query to list the 20 most common first_names among students, in order first of how common they are, and alphabetically when names have the same count.
select first_name, count(*) as occourence from students group by first_name having count(*) > 1 order by occourence desc, first_name asc limit 10; 

-- From the products table:

-- Find the most expensive product.
select name from products order by price desc limit 1;

-- Find the cheapest product that is on sale.
select name from products where price != sale_price order by price asc limit 1;

-- Find the total value of all inventory in stock (use sale price).
select sum(remaining_quantity * sale_price) as total_value from products;