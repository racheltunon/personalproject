require('dotenv').config();
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {registerClient, loginClient, logoutClient, getClient} = require('./controllers/authController')
const {displayCategories, displayCategory, displayItems, addItem, editItemInfo, getItemInfo} = require('./controllers/storeController')
const {addFavorite, getFavorites, getProfilePic} = require('./controllers/userController')
const {createOrder} = require('./controllers/checkoutController')
const {removeItem, addToCart, updateCart} = require('./controllers/cartController')

const app = express();

let {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

app.use(express.json());
app.use(
    session({
        secret: SESSION_SECRET,
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 3 
        }
    })
)



///Endpoints///

//authentication endpoints
app.post('/auth/register', registerClient)
app.post('/auth/login', loginClient)
app.get('/auth/client', getClient)
app.post('/auth/logout', logoutClient)

//store endpoints
//app.post('/api/admin/add', addProduct)
app.get('/api/categories', displayCategories)
app.get('/api/items', displayItems)
app.get('/api/categories/:category_id/:id', getItemInfo)
app.get('/api/categories/:category_id', displayCategory)

//cart endpoints 
app.post('/api/cart', addToCart)
app.delete('api/cart/remove-item/:id', removeItem)
app.get('/api/cart', updateCart)

//checkout endpoints 
//app.post('/checkout/address', addAddress)
// app.get('/checkout/previous-address/:id', getPreviousAddress)
// app.post('/checkout/update-address-status', updateAddressStatus)
app.post('/checkout/add-order', createOrder)


//admin endpoints 
// app.put('/api/edit-product/:id', editProductInfo)
// app.get('/admin/clients', getClients)
// app.get('/adim/get-order-info', getOrderInfo)

//user endpoints 
app.post('/client/favorites/:id', addFavorite)
// app.delete('/client/favorites/:id', removeFavorite)
app.get('/client/favorites', getFavorites)
app.post('/client/add-profile-pic', getProfilePic)


massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Database Connected');
})


app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
})