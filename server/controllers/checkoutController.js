const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripe = require('stripe')(stripeSecretKey)
const postStripeCharges = res => stripeRes => {
    res.status(200).json({success: stripeRes})
}
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

const createCharge = (req, res, app) => {
    stripe.charges.create(req.body, postStripeCharges(res))
    return app;
}
module.exports = {
    createOrder,
    createCharge
}