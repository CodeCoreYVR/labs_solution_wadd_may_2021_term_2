-- Find the average line_item total price (meaning quantity * price) for each order that were completed in January 2016 month.

SELECT product_id, AVG(quantity * price) AS average_price FROM orders 
INNER JOIN line_items 
ON orders.id = line_items.order_id
WHERE orders.completed_on > '2016-01-01'
GROUP BY product_id
ORDER BY average_price DESC;