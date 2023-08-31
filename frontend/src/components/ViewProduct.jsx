import React from 'react';

class ViewProduct extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                name: this.props.name,
                price: this.props.price,
                description: this.props.descriptions
            }
        }
        
    render(){
        return(
            <div className="d-flex">
                <img 
                src={this.imageURL}
                className=""
                alt={this.imageAlt}>
                </img>
                 <div className="d-block p-2">
                <p className="card-content ps-2 h3">{this.state.name}</p>
                <p className="card-content ps-2 h5">{this.state.price}</p>
                 <p className="card-content ps-2 h5">{this.state.description}</p>
              </div>
              <button className="btn btn-info">Add to cart!</button>
            </div>
        )
        }
}

export default ViewProduct;