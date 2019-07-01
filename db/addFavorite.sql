INSERT INTO favorites (clientid, itemid)
VALUES ($1, $2);

SELECT * FROM favorites
JOIN items ON favorites.itemid = items.id
WHERE favorites.clientid = $1;