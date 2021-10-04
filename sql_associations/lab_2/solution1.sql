-- Calculate how many items in stock we've ever had for each product (remaining or sold) in the database.
SELECT products.name,
 (remaining_quantity + (SELECT COALESCE(SUM(quantity),0) FROM line_items WHERE product_id = products.id)) as total_stock
FROM products
ORDER BY total_stock DESC;