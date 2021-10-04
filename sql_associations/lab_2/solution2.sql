-- Find the average order total price for all the orders in the system
SELECT order_id, SUM(price) as total_price
FROM line_items 
GROUP BY order_id
ORDER BY order_id;