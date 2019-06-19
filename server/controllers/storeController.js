module.exports = {
    displayCategories: (req, res ) => {
        
        const db = req.app.get('db')
        db.findCategory().then(res => {res.status(200).json(res.data)
        console.log(res.data)}).catch(error => {
            res.status(500).send(error)
        });

    },
    // addItem: (req, res ) => {
    //     const {category, name, main_img, images, material, description, price}= req.body
    //     const db = app.get('db')
    //     db.addItem([category, name, main_img, images, material, description, price]).then(response => res.status(200).json(response)).catch(err => {
    //         console.log(err);
    //         res.status(500).send(error);
    //     })
    // },
    // getItems: (req, res) => {
    //     const db = req.app.get('db');
    //     db.getItems().then(response => {res.status(200).json(response)
    //     console.log(response)}).catch(err);
    //     res.status(500).send(err)
    // },

}