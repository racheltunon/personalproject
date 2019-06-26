SELECT * FROM items 
JOIN categories on items.category_id = categories.category_id
WHERE items.category_id = $1;