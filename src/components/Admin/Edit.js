import React, {Component} from 'react'
import axios from 'axios' 
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {getClient} from '../../redux/clientReducer'
import { removePropertiesDeep } from '@babel/types';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state={
            itemInfo: [],
            category_id: 0,
            name: '',
            images:[] ,
            material:'' ,
            description: '',
            price: 0
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.editItem(
            this.state.category_id,
            this.state.name,
            this.state.images,
            this.state.material,
            this.state.description,
            this.state.price
        );
        this.setState(
            {name: ''},
            {category_id: 0},
            {images: []},
            {material: ''},
            {description: ''},
            {price: 0}
        );
        alert('Your Product Has Been Edited')
    };

    componentDidMount() {
        this.props.getClient()
        axios.get(`/api/product/${this.props.match.params.id}`).then(res => {
            this.setState(
                {itemInfo: res.data,
                    category_id: res.data[0].category_id,
                    name: res.data[0].name,
                    images: res.data[0].images,
                    material: res.data[0].material,
                    description: res.data[0].description,
                    price: res.data[0].price
                }
            )
            console.log(res.data);
        }).catch(error => {})
    }

    handleChange = e => {
        this.setState({ [e.target.category_id]: e.target.value})
        this.setState({ [e.target.name]: e.target.value})
        this.setState({ [e.target.images]: e.target.value})
        this.setState({ [e.target.material]: e.target.value})
        this.setState({ [e.target.description]: e.target.value})
        this.setState({ [e.target.price]: e.target.value})
    };

    editItem = () => {
        axios.put(`/api/product/${this.props.match.params.id}`, {
            category_id: this.state.category_id,
            name: this.state.name,
            images: this.state.images,
            material: this.state.material,
            description: this.state.description,
            price: this.state.price
        }).then(res => {
            console.log(res.data);
            this.setState({
                category_id: res.data.category_id,
                name: res.data.name,
                images: res.data.images,
                material: res.data.material,
                description: res.data.description,
                price: res.data.price
            })
        }).then(this.props.history.push('/admin'))
    };
    render() {
        console.log(this.props);
        console.log(this.state.itemInfo[0]);
        return (
            <div>
                <div className="form-container">
                    <div>Edit Item Form</div> <br/>
                    <div className="inner-form-container">
                        <div className="form">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-image-container">
                                    <img className="form-image" src={this.state.image} alt="" />
                                </div>
                                    <p>
                                        Item Name: 
                                            <input value={this.state.name}
                                            type="text"
                                            name="name"
                                            onChange={this.handleChange}
                                            placeholder={this.state.name}/>
                                    </p>
                                    <p>
                                        Category ID: 
                                        <select className="category-edit"
                                        value={this.state.category_id}
                                        name="category_id"
                                        onChange={this.handleChange}
                                        >
                                            <option>Choose an Option</option>
                                        </select>
                                    </p>
                                    <p>
                                        Images: 
                                            <input 
                                            placeholder="Choose Images"
                                            className="image-carrassel"
                                            value={this.state.images}
                                            type="text"
                                            name="images"
                                            onChange={this.handleChange}/>
                                    </p>
                                    <p>
                                        Material: 
                                            <input 
                                            className="material"
                                            value={this.state.material}
                                            type="text"
                                            name="material"
                                            onChange={this.handleChange}/>
                                    </p>
                                    <p>
                                        Description:
                                            <input 
                                            className="description"
                                            value={this.state.description}
                                            type="text"
                                            name="description"
                                            onChange={this.handleChange}
                                            />
                                    </p>
                                    <button>Submit</button>
                            </form>
                            <br />
                        </div>
                    </div>
                </div>
                    <div className="photos-container">
                        <div>Available Images</div>
                        <br/>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        client: state.client
    }
}
export default connect(
    mapStateToProps, 
    {getClient: getClient}
)(Edit)