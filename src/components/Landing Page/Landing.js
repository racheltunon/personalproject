import React, {Component} from 'react'
import NavBar from '../Landing Page/NavBar'
import Categories from '../Store/Categories/Categories'
import './Landing.css' 



export default class Landing extends Component {
    constructor() {
        super();
        this.state = {}
     }  
     render() {
         return (
             <div className="landingPage">
             <nav>
                 <NavBar/>
                 <div> 
                    <h1>VIOLET RIOT VINTAGE</h1>
                 {/* animated rose image
                 social media links */}
                 <Categories/>
                 {/* iphone img
                 instagram feed */}
                 </div>
             </nav>
             </div>
         )
     }
}

