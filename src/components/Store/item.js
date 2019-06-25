import React, {Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import {getClient, addToCart, updateCart} from '../../redux/clientReducer'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state={
            itemInfo=[],
            description: false,
            material: false,
        }
        this.putInCart = this.putInCart.bind(this);
    }

    componentDidMount() {
        this.props.getClient()
        axios.get(`/api/categories/${category_id}/${this.props.match.params.id}`).then(response => {
            this.setState({productInfo: response.data})
        })
        this.props.updateCart()
        this.props.addToCart()
    }

    putInCart() {
        !this.props.client.login ? alert ('please log in or create an account') :
        this.props.addToCart(this.state.itemInfo[0]).then(this.props.updateCart().then(
            alert('Item placed in bag')
        ))
    }

    render() {
        console.log(this.state.itemInfo)
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => state;
export default connect(
    mapStateToProps, {getClient: getClient, addToCart: addToCart, updateCart: updateCart}
)(items)