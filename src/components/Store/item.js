import React, {Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import {getClient, addToCart, updateCart} from '../../redux/clientReducer'

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
        // axios.get(`/api/categories/${this.props.match.params.category_id}/${this.props.match.params.id}`).then(response => {
        //     this.setState({productInfo: response.data})
        // })
        this.props.updateCart()
 
    }

    putInCart() {
        !this.props.client.login ? alert ('please log in or create an account') :
        this.props.addToCart(this.state.itemInfo[0]).then(this.props.updateCart().then(
            alert('Item placed in bag')
        ))
    }
    
    render() {
        console.log(this.state.itemInfo)
        console.log(this.props)
        let displayItem = this.props.store.store.category.map(item => {
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
                <h1>This is supposed to be an item</h1>
                {displayItem}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        store: state
    }
};
export default connect(
    mapStateToProps, {getClient: getClient, addToCart: addToCart, updateCart: updateCart}
)(Item)