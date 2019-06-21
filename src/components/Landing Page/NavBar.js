import React, {Component}from 'react'
import {Link} from 'react-router-dom'
// import ProfilePic from '../../images/IconOffice'
import './Landing.css'

class NavBar extends Component {
    render() {
    return (
        <div className='nav'>
            <Link to='/'>
               <button>logo</button>
            </Link>
            <div className='right-nav'>
                <Link to='/saved'>
                    <button>Favorites</button>
                </Link>
                <Link to='/register'>
                    <button>Register</button>
                    {/* <ProfilePic /> */}
                </Link>
                <Link to='/cart'>
                    <button>Cart</button>
                </Link>
            </div>
        </div>


    )
}
}
export default NavBar;