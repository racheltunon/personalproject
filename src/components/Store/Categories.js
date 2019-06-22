import React, {Component} from 'react'
import {connect } from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import { displayItems, displayCategory} from '../../redux/categoriesReducer'
import NavBar from '../Landing Page/NavBar'
import './Categories.scss'
import axios from 'axios';


 class Categories extends Component {
     constructor() {
         super() 
         this.state ={
            redirect: false
         }

     }
     componentDidMount() {
         this.props.displayCategory(this.props.match.params.id);
         this.props.displayItems();
     }
     render() {
         const {category, items, loading} = this.props.store
         const showCategoryItems = category.map((element, id) => {
        
             return (
                 <div className="categoryItem" key={element.id}>
                        <Link to={`/categories/${this.props.match.params.id}/${element.name}`}>
                            <img id="main-img" src={element.main_img}/> 
                        </Link>
                            <h1>{element.name}</h1>
                            <h3>${element.price}</h3>
                    
                 </div>
             )
        })
        //      return (
        //          <div>
        //          <Link to={`/catagories/${this.props.match.params}`}>
        //              <img src={category.main_img}/>
        //          </Link>
        //      </div>
        //  )
        return (
            <div>
                <NavBar />
            <div>{showCategoryItems}</div>
            </div>
        )
        }
 }

 function mapStateToProps(state) {
     console.log(state)
    return {
        store: state.store
    }
}
export default connect(
    mapStateToProps,
    {displayCategory, displayItems})(Categories);