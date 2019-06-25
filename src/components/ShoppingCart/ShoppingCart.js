import React, {Component} from 'react' 
import axios from 'axios'
import {connect } from 'react-redux'
import {Link} from 'react-router-dom'

import NavBar from '../Landing Page/NavBar'
import AddToCart from './AddToCart'
import {getClient, updateCart} from '../../redux/clientReducer'
import './ShoppingCart.css' 

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state={};
        
        this.deleteItem = this.deleteItem.bind(this)
    }

    deleteItem = id => {
        axios.delete(`/api/cart/remove-item/${id}`)
        .then(res => {
            console.log(res.data);
            this.props.getClient()
            console.log(this.props.client)
        })
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        client: state.client
    }
}
export default connect(
    mapStateToProps, {getClient: getClient, updateCart: updateCart}
)(ShoppingCart)