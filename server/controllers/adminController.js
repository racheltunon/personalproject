module.exports = {
    getClients: (req, res) => {
        const db = req.app.get('db')
        db.getClients().then(response => {
            res.status(200).json(response)
        }).catch(error => {
            console.log(error);
            res.status(500).send(error)
        })
    },
    getOrderInfo: (req, res ) => {
        const db = req.app.get('db');
        db.getOrderInfo().then(response => res.status(200).json(response))
        .catch(error => {
            console.log(error);
            res.status(500).send(error);
        })
    },
    editShippedDate: (req, res) => {
        const db = req.app.get('db');
        const {shippedDate} = req.body;
        db.editShippedDate([+req.params.id, shippedDate]).then(response => 
            res.status(200).json(response)).catch(error => {
                res.status(500).send({ errorMessage: 'error'});
                console.log(error);
            })
        },
    addProduct: (req, res) => {
        const db = req.app.get('db');
        const {
            category_id, 
            name, 
            main_img, 
            images, 
            material, 
            description, 
            price
        } = req.body
        db.addItem([category_id, name, main_img, images, material, description, price])
        .then(response => res.status(200).json(response)).catch(
            error => {
                console.log(error);
                res.status(500).send(error)
            }
        )
    },
    editProductInfo: (req, res) => {
        const db = req.app.get('db')
        const {
            category_id, name, images, material, description, price 
        } = req.body;
        console.log(req.params.id)
        db.editProductInfo([
            req.params.id,
            category_id, 
            name, 
            images, 
            material,
            description,
            price
        ]).then(response => res.status(200).json(response)).catch(errpr => {
            console.log(response)
            res.status(500).send({errorMessage: 'Error'})
            console.log(error)
        })
    }
}