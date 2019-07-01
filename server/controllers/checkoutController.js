
let itemid = [];

const createOrder = (req, res) => {
    const db = req.app.get('db')
    let clientid = req.session.client.client_id
    console.log(req.session.client)
        console.log(clientid)
    for (i = 0; i < req.session.client.cart.length; i++) {
        itemid.push(req.session.client.cart[0].id)
    }
    db.addOrder([clientid, itemid]).then(() => res.status(200).json(req.session.client))
    .catch(error => {
        console.log(error) 
        res.status(500).send(error);
    })
}
module.exports = {
    createOrder,
    
}