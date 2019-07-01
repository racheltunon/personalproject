SELECT * FROM orders 
JOIN orders on orders.client_id = clients.client_id
WHERE orders.client_id = $1;