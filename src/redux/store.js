import {createStore, combineReducers, applyMiddleware} from 'redux'
import clientReducer from './clientReducer'
import itemReducer from './itemReducer'
import categoriesReducer from './categoriesReducer'
import promise from 'redux-promise-middleware'

const rootReducer = combineReducers({
    client: clientReducer,
    store: categoriesReducer,
    item: itemReducer,
})

export default createStore(rootReducer, applyMiddleware(promise));