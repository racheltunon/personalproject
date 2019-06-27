import React, {Component} from 'react'
import axios from 'axios' 
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginClient} from '../../redux/clientReducer'
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
        const {loginClient, history} = this.props;
        const {username, password} = this.state;
        loginClient({username, password}, history)
    }
    handleChange(prop, val) {
        this.setState({[prop]: val})
    }

 

    render() {
        if(this.state.redirect) {
            alert('Welcome Back')
            return <Redirect to='/' />
        }
        return (
            <div className="page">
                <div className="container">
                    <div id="left">
                        <div className="login-container">Login</div>
                        <div id="eula">By logging in your agree to the ridiculously long terms that you didn't bother to read.</div>
                    </div>
                    <div id="right">

                    </div>
                </div>
                <h1>Sign in</h1>
                <form>
                    <input onChange={ (e) => this.handleChange('username', e.target.value)}/>
                    <input onChange={ (e) => this.handleChange('password', e.target.value)}/>
                    <button onClick={this.loginClient}>Login</button>
                </form>
            </div>
        )
    }
}
export default connect(state => state, {loginClient}) (Login)