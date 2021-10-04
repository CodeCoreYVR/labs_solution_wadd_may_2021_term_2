-- Select all the products that weren't purchased during the year 2018.
SELECT name 
FROM products
WHERE id NOT IN 
    (
        SELECT product_id FROM line_items
        WHERE created_at BETWEEN '2018-01-01' AND '2018-12-31'
    )