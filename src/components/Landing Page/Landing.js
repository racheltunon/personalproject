import React, {Component} from 'react'
import NavBar from '../Landing Page/NavBar'
import Categories from '../Store/Categories'
import {Link} from 'react-router-dom'
import {displayCategories} from '../../redux/categoriesReducer'
import {connect} from 'react-redux'

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
                        <img className="categories"src={category.cat_img} alt="category-images"/>
                       
                    </Link>
                </div>

                    
               
                    
            )
        })
         return (
             <div className="landingPage">
                 <Sunset className="sunset"/>
                 <Mountain className="mountain"/>
                   <NavBar className="navBar"/>
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


