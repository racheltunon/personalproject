import React, {Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Link, Redirect, } from 'react-router-dom'
import {getClient, addToCart, updateCart} from '../../redux/clientReducer'
import NavBar from '../Landing Page/NavBar'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state={
            itemInfo:[],
            description: false,
            material: false,
           
        }
        this.putInCart = this.putInCart.bind(this);
    }

    componentDidMount() {
        this.props.getClient()
        axios.get(`/api/categories/${this.props.match.params.category_id}/${this.props.match.params.id}`).then(response => {
            this.setState({itemInfo: response.data})
        })
        this.props.updateCart()
 
    }
    
    
    putInCart() {
        !this.props.client.login ? alert('Please Login or Create an Account') :
        this.props.addToCart(this.state.itemInfo[0]).then(this.props.updateCart().then(
            alert('Item placed in bag')
        ))
    }
    
    render() {
        console.log(this.props.client.client)
        let displayItem = this.props.store.category.map(item => {
            if (item.id === +this.props.match.params.id) {
                this.state.itemInfo.push(item)
                return (
                    <>
                    <h1>{item.name}</h1>
                    <img src={item.main_img} />
                    </>
                )
            }
        })
        return (
            <div>
                <NavBar />
                <h1>This is supposed to be an item</h1>
                {displayItem}
                <button>back.</button>
                <button onClick={this.putInCart} className="add-to-cart-button">add to cart.</button>



            </div>
        )
    }
}


export default connect(state => state, {getClient: getClient, addToCart: addToCart, updateCart: updateCart}
    )(Item)
   
