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
        console.log(this.props)
        const showCategoryItems = category.map((element, id) => {
    
            return (
                <div className='categories-container'>
                <div className="categoryItem" key={element.id}>
                    <Link to={`/categories/${this.props.match.params.id}/${element.id}`}>
                        <img id="main-img" src={element.main_img}/> 
                    </Link>
                    <div className="cat-options">
                        <h1>{element.name}</h1>
                        {/* <h2> Material: {element.material}</h2> */}
                        {/* <h3>{element.description}</h3> */}
                        <h4>${element.price}</h4>
                    <Link to="/saved"><button>save.</button></Link>
                    </div>
                        
                
                </div>
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
        <div className='navigation'>
            <NavBar />
        <div className="categories-component">
        {showCategoryItems}</div>
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