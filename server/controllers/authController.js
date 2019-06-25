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
    loginClient,
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

async function loginClient(req, res) {
    const db = req.app.get('db'), {username, password} = req.body;
    const hash = await db.checkClient(username);
    console.log(hash[0].password);
    bcrypt.compare(password, hash[0].password).then(doesMatch => {
        if(doesMatch === true) {
            req.session.client = username;
            res.status(200).json(req.session.client)
        } else {
            res.status(403).json({error: "Incorrect Username or Password"})
        }
    })
   
}