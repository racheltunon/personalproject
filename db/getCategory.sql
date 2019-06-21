SELECT * FROM items 
JOIN categories on items.id = categories.category_id
WHERE items.category_id = $1;