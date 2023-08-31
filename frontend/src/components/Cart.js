import React from "react";
import Navbar from "./Navbar";

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      total: this.props.total,
    };

    this.checkout = this.checkout.bind(this);
  }
  checkout() {
    console.log("Thank you for buying at our store!");
    this.setState({
      items: [],
      total: 0,
    });
  }

  render() {
    return (
      <div className="card w-100">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Cart</h2>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span class="h5">Items: </span>{this.state.items}</li>
            <li className="list-group-item">
              <span class="h5">Total: </span> ${this.state.total}
            </li>
          </ul>
          <div className="card-body"></div>
        </div>
        <button className="btn btn-info" onClick={this.checkout}>
          Checkout!
        </button>
      </div>
    );
  }
}

export default Cart;
