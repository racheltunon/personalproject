import React, {Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Link, Redirect, } from 'react-router-dom'
import {getClient, addToCart, updateCart} from '../../redux/clientReducer'
import NavBar from '../Landing Page/NavBar'
import './Item.scss'

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
                    <div className="item-options">
                    <img src={item.main_img} 
                    />
                    <div className='item-info'>
                    <h1 >{item.name}</h1>
                    <h2 >{item.material}</h2>
                    <h3 >{item.description}</h3>
                    <h4 >${item.price}</h4>
                    <button onClick={this.putInCart} className="add-to-cart-button">add to cart.</button>
                    </div>
                    </div>
                )
            }
        })
        return (
            <div className='item-component'>
                <NavBar />
                <div className="item-box">
                {displayItem}
                
                </div>



            </div>
        )
    }
}


export default connect(state => state, {getClient: getClient, addToCart: addToCart, updateCart: updateCart}
    )(Item)
   
