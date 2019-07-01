import React, {Component} from 'react'
import './Checkout.css'
import {connect} from 'react-redux'
import axios from 'axios'
import {getClient} from '../../redux/clientReducer'
import Address from './Address'
import Shipping from './Shipping'
import Payment from './Payment'

class Checkout extends Component {
    constructor() {
        super();
        this.state={}
    }
    componentDidMount() {
        this.props.getClient();
    }

    render() {
        return (
            <div>Checkout</div>
        )
    }
}

const mapStateToProps = state => {
    const {client} = state.client
    return {
        client
    }
}
export default connect(mapStateToProps, {getClient}) (Checkout)