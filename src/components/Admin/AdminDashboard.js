import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {getClient } from '../../redux/clientReducer'
import Edit from './Edit'

class AdminDashboard extends Component {
    constructor() {
        super();
        this.state={}
    }

    render () {
        return (
            <div className="AdminPage">
                <h1>AdminDashboard</h1>
                <Edit />
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
export default connect(
    mapStateToProps,
    {getClient}
) (AdminDashboard)