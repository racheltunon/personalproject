import React, {Component} from 'react'

export default class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="item-container">
                <div className="item-component">
                    <div className="img-details-container">
                        <div id="main-img">
                            <img alt='' src={this.props.element.main_img}/>
                        </div>
                        <div className="name">
                            {this.props.element.name}
                            <div className="discription">
                                <div>{this.props.element.description}</div>
                                <div>{this.props.element.material}</div>
                                <div>{this.props.element.price}</div>

                            </div>
                            <button onClick={()=> this.props.deleteItem(this.props.element.id, this.props.element.price)}></button>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}