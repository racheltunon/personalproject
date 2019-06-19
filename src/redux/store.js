import {createStore, combineReducers, applyMiddleware} from 'redux'
import clientReducer from './clientReducer'
import itemsReducer from './itemsReducer'
import promise from 'redux-promise-middleware'

const rootReducer = combineReducers({
    client: clientReducer,
    items: itemsReducer
})

export default createStore(rootReducer, applyMiddleware(promise));