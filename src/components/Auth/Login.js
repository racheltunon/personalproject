import React, {Component} from 'react'
import axios from 'axios' 
import {Redirect} from 'react-router-dom'
import './Login.css'

export default class Login extends Component {
    constructor() {
        super();
        this.state={
            username: '',
            password: '',
            redirect: false
        }
    this.handleUsername=this.handleUsername.bind(this)
    this.handlePassword=this.handlePassword.bind(this)
    this.loginClient=this.loginClient.bind(this)
    }
    handleUsername(e) {
        this.setState({username: e.target.value})
    }
    handlePassword(e) {
        this.setState({password: e.target.value})
    }
    loginClient() {
        axios.post('/auth/login', {
            username: this.state.username,
            password: this.state.password
        }).then(() => this.setState({redirect: true})).catch(() => alert('Wrong Username or Password. Try again.'))
    }

    render() {
        if(this.state.redirect) {
            alert('Welcome Back')
            return <Redirect to='/dashboard' />
        }
        return (
            <div>
                <h1>Sign in</h1>
                <form>
                    <input onChange={this.handleUsername}/>
                    <input onChange={this.handlePassword}/>
                    <button onClick={this.loginClient}>Login</button>
                </form>
            </div>
        )
    }
}