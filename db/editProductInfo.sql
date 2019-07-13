UPDATE items 
SET category_id = $2, name = $3, images = $4, material = $5, description = $6, price = $7
WHERE id = $1 