import React, {Component} from 'react'
import NavBar from '../Landing Page/NavBar'
import Categories from '../Store/Categories'
import {Link} from 'react-router-dom'
import {displayCategories} from '../../redux/categoriesReducer'
import {connect} from 'react-redux'
import './Landing.scss' 



 class Landing extends Component {
    constructor() {
        super();
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
             <nav>
                 <NavBar/>
                 <div className="hero"> 
                    <h1>VIOLET RIOT VINTAGE</h1>
                 {/* animated rose image
                 social media links */}
                 {/* iphone img
                 instagram feed */}
                 </div>
                 <div>
                 {categoryList}
                 </div>
             </nav>
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