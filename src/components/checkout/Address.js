import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'

import NavBar from '../Landing Page/NavBar'
import './Checkout.css'
import {getClient} from '../../redux/clientReducer'
class Address extends Component {
    constructor(props) {
        super(props);
        this.state= {
            lineone: '',
            linetwo: '',
            firstName: '',
            lastName: '',
            mobile: '',
            city: '',
            state: '',
            zip: '',
            country: '',
            current: false,
            hiddenForm: false,
        }
    }
    componentDidMount() {
        this.props.getClient();
        this.getPreviousAddress();
        this.setState({current: false});
        console.log(this.props.client)
    }
    handleSubmit = e => {
        e.preventDefault();
        this.addAddress(
            this.state.lineone,
            this.state.linetwo, 
            this.state.city,
            this.state.state,
            this.state.country,
            this.state.current
        );
        this.setState({
            clientAddressId: null,
            lineone: '',
            linetwo: '',
            city: '',
            state: '',
            zip: 0,
            country: '',
            current: true

        })
        console.log('address submitted')
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    

    render() {
        return (
            <div>ADDRESS</div>
        )
    }
}
const mapStateToProps = state => {
    const {client} = state.client
    return {
        client
    }
}
export default connect(mapStateToProps, {getClient})(Address)