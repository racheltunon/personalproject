import React, {Component}from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {getClient} from '../../redux/clientReducer'
// import Login from '../Auth/Login'
// import Register from '../Auth/Register/Register'
import AdminDashboard from '../Admin/AdminDashboard'
import Landing from './Landing'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import './Landing.scss'

//SVG's//
import {ReactComponent as Heart} from './Heart.svg'
import {ReactComponent as Client} from './Client.svg'
import {ReactComponent as Cart} from './Cart.svg'
import {ReactComponent as Search} from './Search.svg'





class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            
        }
    }

    componendDidMount() {
        this.props.getClient()
    }
    render() {
    console.log(this.props)
    const { client } = this.props
    return (
        // !client.client_id ? (
        //     <div className="nav-dropdown">
        //     <Login />
        //     <Register />
        //     </div>
        // ) : 

        // client.client_id && !client.isAdmin ? (
            // <div>
        <div className="nav">
            <Link to='/'>
            <Search /> 
            </Link>
            <div className='right-nav'>
                <Link to='/saved'>
                    <Heart />
                </Link>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Link to='/account'>  
                    <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
                    </Link>
                    </DropdownButton>
                <Link to='/cart'>
                    <Cart />
                </Link>
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
export default connect(
    mapStateToProps,
    {getClient: getClient}
) (NavBar)