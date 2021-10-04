-- Find the average order total price for all the orders in the system
SELECT AVG(order_price) as average_toatal_price
FROM (
    SELECT SUM(price) as order_price
        FROM line_items 
        GROUP BY order_id
        ORDER BY order_id
) as res
        
