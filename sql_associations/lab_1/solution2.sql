-- Select product names, product prices and the lowest price they were sold at during the last 20 months.
SELECT products.id, products.name, products.price, ROUND(CAST(products.sale_price as numeric), 2),
(
    SELECT ROUND(CAST(MIN(line_items.price) as numeric), 2) as min_price
    FROM line_items
    WHERE product_id = products.id AND
    created_at > '2018-01-04'
)
FROM products;