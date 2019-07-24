import React, {Component} from 'react'
import axios from 'axios' 
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginClient, getClient} from '../../redux/clientReducer'
import AdminDashboard from '../Admin/AdminDashboard'
// import {ReactComponent as Snake} from './Register/Snake.svg'

import './Login.scss'

 class Login extends Component {
    constructor() {
        super();
        this.state={
            username: '',
            password: '',
            redirect: false
        }
    this.handleChange= this.handleChange.bind(this)
    this.loginClient=this.loginClient.bind(this)
    
    }
    handleUsername(e) {
        this.setState({username: e.target.value})
    }
    handlePassword(e) {
        this.setState({password: e.target.value})
    }
    loginClient() {
        const {loginClient, history, isAdmin} = this.props;
        const {username, password} = this.state;
        loginClient({username, password}, history)
    }
    handleChange(prop, val) {
        this.setState({[prop]: val})
    }
    componentDidMount() {
        this.props.getClient();

    }



    render() {
        const { client } = this.props
        return (
            <div className="page">
            {client.client_id && client.isAdmin ? <Redirect to="/dashboard" /> 
            :client.client_id ? <Redirect to="/" /> :
            <div className="page">
                <div className="login-container">
                    <form className="login-form">
                    <h1>Sign in</h1>
                        <input onChange={ (e) => this.handleChange('username', e.target.value)}/>
                        <input onChange={ (e) => this.handleChange('password', e.target.value)}/>
                        <button onClick={this.loginClient}>Login</button>
                    </form>
                    
                </div>
            </div>}
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
export default connect(mapStateToProps, {loginClient, getClient: getClient}) (Login)