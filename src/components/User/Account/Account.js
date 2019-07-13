import React, {Component} from 'react'
import axios from 'axios';
import {connect} from 'react-redux'
import {editUsername, getClient} from '../../../redux/clientReducer'


class Account extends Component {
    constructor() {
        super();
        this.state ={
            newUsername: ''
            
        }
        this.handleUsername = this.handleUsername.bind(this)
    }
    componentDidMount() {
        this.props.getClient()
    }
    handleUsername(e) {
        this.setState({[e.target.name]: e.target.value})

    }
    

    changeUsername(e) {
        
    }

//axios.put('/client/edit-username')

    render() {
        console.log(this.props.client)
        return (
            <div className="account-container">
                <input name="newUsername" value={this.state.newUsername} onChange={this.handleUsername}/>
                <button onClick={() => this.props.editUsername(
        this.props.client.client_id, this.state.newUsername
        )}></button>
            </div>
        )
    }
}
function mapStateToProps(state) {
return {
    client: state.client
}
}

export default connect(mapStateToProps, {editUsername, getClient})(Account)