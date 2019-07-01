const bcrypt = require('bcryptjs')

module.exports={

    registerClient: (req, res) => {
        const {name, username, email, password} = req.body
        const db = req.app.get('db')
        db.findClient(username).then(clients => {
            if(clients.length ===0) {
                bcrypt.hash(password, 12).then(hash => {
                    db.addClient(name, username, email,hash).then(() => {
                        req.session.client = username;
                        res.status(200).json(req.session.client)
                    })
                })
            } else {
                res.status(403).json({error: 'Username Taken'});
            }
        })
        
    

    },
    loginClient: (req, res) => {
        const {username, password} = req.body;
         const db = req.app.get('db')
          db.checkClient(username).then(async response => {   
             if (!response.length) {
                 res.status(401).json({error: "no user found"})
             } else {
                 const doesMatch =  await bcrypt.compare(password, response[0].password)
                 if (!doesMatch) {
                     res.status(403).json({error: "Incorrect Username or Password"})
                 } else {
                     req.session.client = {
                         client_id: response[0].client_id,
                         name: response[0].name,
                         username: response[0].username,
                         email: response[0].email,
                         profile_pic: '',
                         cart: [],
                         total: 0
                     }
                 }
                 res.json(req.session.client)
             }
             })},
    logoutClient: (req, res) => {
        const {session} = req;
        session.destroy();
        res.status(200).send(req.session)
    },
    getClient: (req, res) => {
        if(req.session.client) {
            res.json(req.session.client)
        } else {
            res.status(401).json({error: "Please Log In"})
        }
     }
}



    // console.log(hash[0].password);
    // bcrypt.compare(password, hash[0].password).then(doesMatch => {
    //     if(doesMatch === true) {
    //         console.log(doesMatch)
    //         req.session.client = {
    //             username,
    //             total: 0,
    //             cart: []
    //         };
    //         res.status(200).json(req.session.client)
        // } else {
        //     res.status(403).json({error: "Incorrect Username or Password"})
        // }
    // })
   

