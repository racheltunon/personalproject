import React from 'react'
import {Link} from 'react-router-dom'
import './Landing.css'

function NavBar() {
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
                </Link>
                <Link to='/cart'>
                    <button>Cart</button>
                </Link>
            </div>
        </div>


    )
}
export default NavBar;