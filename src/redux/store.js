import {createStore, combineReducers, applyMiddleware} from 'redux'
import clientReducer from './clientReducer'
import itemsReducer from './itemsReducer'
import categoriesReducer from './categoriesReducer'
import promise from 'redux-promise-middleware'

const rootReducer = combineReducers({
    client: clientReducer,
    store: categoriesReducer,
    items: itemsReducer
})

export default createStore(rootReducer, applyMiddleware(promise));