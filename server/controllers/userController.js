module.exports = {
    addFavorite: (req, res) => {
        const db = req.app.get('db');
        let clientid = req.session.client.client_id;
        const {id : itemid} = req.body
        console.log(clientid)
       
            db.addFavorite([clientid, itemid]).then(response => {
                console.log(response)
                res.status(200).json(response) } ) 
          
            .catch(err => {
                res.status(500).send({errorMessage: "error"});
                console.log(err)
            })
        
    },

    getFavorites: (req, res) => {
        const db = req.app.get('db')
        const {client_id : clientid} = req.session.client
        db.getFavorites(clientid).then((response) => {
            res.status(200).json(response)
        }).catch(err => {
            console.log(err)
        })
    },
    getProfilePic: (req, res) => {
        req.session.client.profile_pic.push(req.body);
        res.status(200).json('req.session.client.profile_pic')
        console.log(req.session.client.profile_pic)
    }
}