require('dotenv').config();
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {registerClient, loginClient, logoutClient} = require('./controllers/authController')
const {displayCategories} = require('./controllers/storeController')

const app = express();

let {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

app.use(express.json());
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 3 
        }
    })
)

///Endpoints///
app.post('/auth/register', registerClient)
app.post('/auth/login', loginClient)
app.post('/auth/logout', logoutClient)
app.get('/api/categories', displayCategories)
// app.get('api/categories/:items')


massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Database Connected');
})

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
})