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
                        <div another-dumb-div>
                        <div className="img-name">
                            {this.props.element.name}
                        </div>
                            <div className="description">
                                <div>{this.props.element.description}</div>

                            </div>
                                <div>{this.props.element.material}</div>
                                <div>{this.props.element.price}</div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}