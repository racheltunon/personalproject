module.exports = {
    removeItem: (req, res) =>  {
      console.log(req.session.client.cart)
      for (let i = 0; i < req.session.client.cart.length; i++) {
          req.session.client.total -= req.session.client.cart[i].price
          req.session.client.cart. splice(i, 1);
          console.log(req.session.client)
      }
      res.status(200).json([req.session.client.cart, req.session.client.total])
    },
    addToCart: (req, res) => {
        req.session.client.cart.push(req.body);
        req.session.client.total += req.body.price
        res.status(200).json([req.session.client.cart, req.session.client.total])
        console.log(req.session.client.cart)
        console.log(req.session.client.total)
    },
    updateCart: (req, res) => {
        if (req.session.client) {
            res.json([req.session.client.cart, req.session.client.total])
        } else {
            res.status(401).json({error: "Please log in to create your cart"})
        }
    }

}
