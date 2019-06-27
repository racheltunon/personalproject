import React, {Component}from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {getClient} from '../../redux/clientReducer'
import {ReactSVG} from 'react-svg'
import {ReactComponent as Heart} from './Heart.svg'
import {ReactComponent as Client} from './Client.svg'
import {ReactComponent as Cart} from './Cart.svg'
import {ReactComponent as Search} from './Search.svg'
// import ProfilePic from '../../images/IconOffice'
import './Landing.scss'
import { timingSafeEqual } from 'crypto';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            links: [
                {name: "Categories", id: 1 },
                {name: 'logo', id: 2, },
                {name: 'search', id: 3, },
                {name: 'login', id: 4, },
                {name: 'cart', id: 6, },
                

            ]
        }
    }

    componendDidMount() {
        this.props.getClient()
    }
    render() {
        console.log(this.props.client)
        const linkMap = this.state.links.map((element, index) => {
       if (this.props.client && index ===3)
            return (
                <Link to='/' className='link4' >{this.props.client.username}'s Account</Link>
            ); else if (index === 3)
            return (
                <Link className="link4" key={element.id} to='/login'>
                    <Client />
                </Link>
            ) 
        })
    return (
        <div className="nav">
            <Link to='/'>
               <Search />
            </Link>
            <div className='right-nav'>
                <Link to='/saved'>
                    <Heart />
                </Link>
                {linkMap}
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