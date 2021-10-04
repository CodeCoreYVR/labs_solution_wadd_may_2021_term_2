-- Select all the products that have been purchased in the period from January 1st of 2018.
SELECT name 
FROM products
WHERE id IN 
    (
        SELECT product_id 
        FROM line_items 
        WHERE created_at > '2018-01-01'
    )