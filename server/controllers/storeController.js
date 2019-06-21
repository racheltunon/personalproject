module.exports = {
    displayItems: (req, res ) => {
        
        const db = req.app.get('db')
        db.getAllItems().then(response => {res.status(200).json(response)
        // console.log(response)
    }).catch(error => {
            res.status(500).send(error)
        });

    },
    displayCategories: (req, res ) => {
        const db = req.app.get('db')
        db.getAllCategories().then(response => {
            res.status(200).json(response)
            // console.log(response) 
        }).catch(error => {
            res.status(500).send(error)
        })
    },
    displayCategory: (req, res ) => {
        console.log(req.params)
        const db = req.app.get('db')
         const {category_id} = req.params
        db.getCategory(category_id).then(response => {
            res.status(200).json(response)
            console.log(response)
        }).catch(error => {
            
            res.status(500).send(error)
        })
    }
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