import axios from 'axios'

const initialState = {
    loading: false,
    client: {},
    newUsername: '',
    isAdmin: null,
    error: "",
    cart: [],
    total: 0,
    login: true
};
const REGISTER = 'REGISTER'
const LOGIN = 'LOGIN'
const GET_CLIENT = "GET_CLIENT";
const LOGOUT = 'LOGOUT'
const ADD_TO_CART = "ADD_TO_CART"
const GET_CART = "GET_CART"
const UPDATE_CART = 'UPDATE_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const EDIT_USERNAME = 'EDIT_USERNAME'

export default function reducer(state = initialState, action) {
    let {payload} = action
    switch (action.type) {
        case `${REGISTER}_FULFILLED`: 
            return Object.assign({}, state, {client: payload.username, cart: payload.cart, total: payload.total})
        case `${LOGIN}_FULFILLED`: 
            console.log(payload)
            return Object.assign({}, state, {client: payload})
        case `${LOGIN}_REJECTED`:
            return {...state, error: 'Username or Password is Incorrect'}
        case `${GET_CLIENT}_FULFILLED`:
            return Object.assign({}, state, {client: payload})
        case `${EDIT_USERNAME}_FULFILLED`:
            return {...state, newUsername: payload.data}
        case `${ADD_TO_CART}_FULFILLED`:
            return Object.assign({}, state, {cart: payload.cart, total: payload.total})
        case GET_CART:
            return Object.assign({}, state, {cart: payload.cart, total: payload.total})
        case `${UPDATE_CART}_FULFILLED`:
            return Object.assign({}, state, {cart: payload.cart, total: payload.total})
        case `${REMOVE_FROM_CART}_FULFILLED`:
            return Object.assign({}, state, {cart: payload.cart, total: payload.total})
        case `${LOGOUT}_FULFILLED`:
            return {
                client: '',
                cart: [],
                total: 0
            }
        default: return state;
    }  

}

export function getClient() {
    return {
        type: GET_CLIENT,
        payload: axios.get('/auth/client').then(response => response.data)
    };
}

export function editUsername(client_id,newUsername) {
    return {
        type: EDIT_USERNAME,
        payload: axios.put(`/client/edit-username/${client_id}`, {newUsername}).then(response => response.data)
    }
}
export function addToCart(item) {
    return {
        type: ADD_TO_CART,
        payload: axios.post('/api/cart', item).then(response => response.data)
    }
}
export function getCart(cart) {
    return {
        type: GET_CART,
        payload: cart
    }
}

export function updateCart() {
    return {
        type: UPDATE_CART,
        payload: axios.get('/api/cart').then(response => response.data)

    }
}


export function registerClient(obj, history) {
    return {
        type: REGISTER,
        payload: axios.post('/auth/register', obj).then(response => {
            history.push('/');
            return response.data;
        })
    }
}
export function loginClient(obj, history) {
    return {
        type: LOGIN,
        payload: axios.post('/auth/login', obj).then( response => {
            // history.push('/');
            return response.data;
        })
    }
}

export function logout(history) {
    return {
        type: LOGOUT,
        payload: axios.post('/auth/logout').then( () => history.push('/') )
    }
}