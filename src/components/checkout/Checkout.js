import React, {Component} from 'react'
import './Checkout.css'
import {connect} from 'react-redux'
import axios from 'axios'
import {getClient} from '../../redux/clientReducer'
import StripeCheckout from 'react-stripe-checkout'
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
        console.log(this.props.client.total)
        const amount = this.props.client.total;
        const description = "Violet Riot Vintage"
        const errorPayment = data => {
            alert("payment error")
        }
        const fromDollarToCent = amount => amount * 100
        const onToken = (amount, description) => token => 
        
        
            axios.post('/createcharge', {
            description,
            source: token.id,
            amount: fromDollarToCent(amount),
            fulfilled: false
        }).then(alert("payment successful")).catch(errorPayment)
        return (
            <div>
                <div className="stripe">
                    <h1>Enjoy Your Vintage Item</h1>
                    <StripeCheckout
                    description={description}
                    amount={fromDollarToCent(amount)}
                    token={onToken(amount, description)}
                    stripeKey={"pk_test_wzZ1Ms8tGZty2cNcbxQCOs4A00DCIrG0fI"}
                    />
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
export default connect(mapStateToProps, {getClient}) (Checkout)