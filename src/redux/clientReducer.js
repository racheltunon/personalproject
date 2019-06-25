import axios from 'axios'

const initialState = {
    loading: false,
    client: {},
    error: "",
    cart: [],
    total: 0
};

const GET_CLIENT = "GET_CLIENT";
const ADD_TO_CART = "ADD_TO_CART"
const GET_CART = "GET_CART"
const UPDATE_CART = 'UPDATE_CART'

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case `${GET_CLIENT}_FULFILLED`:
            return {...state, client: action.payload.data}
        case `${ADD_TO_CART}_FULFILLED`:
            return {
                ...state,
                cart: action.payload.data
            };
        case GET_CART:
            return {...state, cart: action.payload}
        case `${UPDATE_CART}_FULFILLED`:
            return {...state, cart: action.payload.data}
        default: return state;
    }   

}

export function getClient() {
    return {
        type: GET_CLIENT,
        payload: axios.get('/auth/client')
    }
}
export function addToCart(item) {
    return {
        type: ADD_TO_CART,
        payload: axios.post('/api/cart', item)
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
        payload: axios.get('/api/cart')

    }
}