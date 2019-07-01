SELECT * FROM favorites
JOIN items ON favorites.itemid = items.id
WHERE favorites.clientid = $1 