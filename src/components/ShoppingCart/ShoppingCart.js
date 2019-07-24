import React, {Component} from 'react' 
import axios from 'axios'
import {connect } from 'react-redux'
import {Link} from 'react-router-dom'

import NavBar from '../Landing Page/NavBar'
import CartItem from './CartItem'
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
            
        }).catch(() => {});
        alert('item has been deleted')
    }
    componentDidMount() {
        this.props.getClient()
        // this.props.updateCart()
    }
    render() {
        console.log(this.props.client)
        // console.log(this.props.cart)
        // console.log(this.props.client.cart)
   const cartList = this.props.client.cart && this.props.client.cart.map(element => {
        return (
        <CartItem
        element={element}
        id={element.id}
        key={element.id}
        name={element.name}
        image={element.main_img}
        price={element.price}
        material={element.material}
        description={element.description}
        deleteItem={this.deleteItem}
       
        ><br/></CartItem>
        )
    })
        return (
            <div>
            <div className="cart">
                <div className="cart-nav">
                <NavBar />
                </div>
                <div className="shopping-cart">
                    {this.props.client.cart && cartList}
                    <div className="subtotal-container">
                        {this.props.client && <p id="subtotal">Subtotal:${this.props.client.total}</p>}
                    </div>
                    {!this.props.client.username ? <div id="message"><div id="please-login">Please login to shop<br/>
                    <Link to="/login"><button className="login-button-cart">Login</button></Link>
                    </div></div>
                    : 
                    this.props.client.cart.length ===0 ? <div className="message"><div className="empty-bag">Your cart is empty. Lets Shop!</div></div> :
                    
                    <div className="checkout-container">
                        <Link to="/checkout">
                            <button className="checkout-button">checkout</button>
                            <button onClick={this.deleteItem}>delete</button>
                        </Link>
                    </div>}
                    </div>




                    <br/>

               </div>
            </div>
        )

    }
}

const mapStateToProps = state => {
    const {client} = state.client
    return {
        client
    }
}
export default connect(
    mapStateToProps, {getClient: getClient, updateCart: updateCart}
)(ShoppingCart)