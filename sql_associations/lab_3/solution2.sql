-- Select the top 10 products in terms of gross sales from 2018.
SELECT (SELECT name FROM products WHERE id = product_id), SUM(price) as gross_sale
FROM line_items
WHERE created_at BETWEEN '2018-01-01' AND '2018-12-31'
GROUP BY product_id
ORDER BY gross_sale DESC
LIMIT 10;
