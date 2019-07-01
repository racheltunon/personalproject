import React, {Component} from 'react'
import axios from 'axios'
import './Favorites.css'

class Favorites extends Component {
    constructor() {
        super();
        this.state={
            favorites:[]
        };
    }

    componentDidMount(){
        axios.get('/client/favorites').then(response => {
            this.setState({favorites: response.data})
        })
    }
component
    render() {
        console.log(this.state.favorites)
        const getFavorites = this.state.favorites.map((elements, id) => {
            return (
                <div className="favorites-page" key={elements.id}>
                    <div className="item-box">
                        <img src={elements.main_img}/>
                        <h1>{elements.name}</h1>
                        <h4>{elements.description}</h4>
                    </div>
    
                </div>
            )

        })

        return (
            <div>{getFavorites}</div>
        )
    }
}

export default Favorites