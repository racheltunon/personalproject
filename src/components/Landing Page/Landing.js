import React, {Component} from 'react'
import Categories from '../Store/Categories'
import {Link, Redirect} from 'react-router-dom'
import {displayCategories} from '../../redux/categoriesReducer'
import {connect} from 'react-redux'
import NavBar from '../Landing Page/NavBar'

import {ReactComponent as Sunset} from '../../images/Sunset.svg'
import {ReactComponent as Mountain} from '../../images/Mountain.svg'

import '../Store/Categories.scss'
import './Landing.scss' 



class Landing extends Component {
constructor(props) {
    super(props);
    this.state = {}
    }  

    componentDidMount() {
    this.props.displayCategories();
    }
    render() {
        
        const {categories} = this.props.store
    let categoryList = categories.map((category, category_id) => {
        return (

            <div className="category-container" key={category.category_id}>
                
                <Link to={`/categories/${category.category_id}`}>
                    <img className="categories-img"src={category.cat_img} alt="category-images"/>
                    <div className='overlay'>
                        <div className="category-text">{category.category_name}</div>
                    </div>
                    
                </Link>
            </div>

                
            
                
        )
    })
        return (
            <div className="landingPage">
                <NavBar />
                <Sunset className="sunset"/>
                <Mountain className="mountain"/>
                <div className="title">
                <h3>#WeThriftYouScore</h3>
                <div className="knockout-text">
                    <h1>VIOLET RIOT VINTAGE</h1>
                </div>
                </div>
                <Link className="learn" to="/about">
                    <h4>learn more.</h4>
                </Link>
            
                <div className="categoryList">
                {categoryList}
                </div>
        
            </div>
        
        )
    }
}

function mapStateToProps(state) {
    return {
        store: state.store
    }
}
export default connect(
    mapStateToProps,
    {displayCategories})(Landing);


