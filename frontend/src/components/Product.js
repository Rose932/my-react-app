import React from "react";
import { PiShoppingCartLight } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

export class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      origin: this.props.origin,
      description: this.props.description,
      imageURL: this.props.imageURL,
      price: this.props.price,
      imageAlt: this.props.imageAlt,
      category: this.props.category,
    };

    this.addToCart = this.addToCart.bind(this);
    this.removeProductFromCart = this.removeProductFromCart.bind(this);
    this.applyDiscount = this.applyDiscount.bind(this);
    this.applyCoupon = this.applyCoupon.bind(this);
    this.changeAvailability = this.changeAvailability.bind(this);
  }

  addToCart() {
    console.log("You have added the product to your cart.");
  }
  removeProductFromCart() {
    console.log("You have removed the product from your cart.");
  }

  applyDiscount() {
    console.log("You have applied the discount to your cart items.");
  }

  applyCoupon() {
    console.log("You have used the coupon on the items in your cart.");
  }

  changeAvailability() {
    console.log("The availability of the product has been changed.");
  }

  render() {
    return (
      <div className="col-md-4 m-2">
        {/* <!-- Card --> */}
        <div className="card mb-7">
          {/* <!-- Image --> */}
          <div className="card-img">
            {/* <!-- Image --> */}
            <a
              className="card-img-hover"
              href="https://w0.peakpx.com/wallpaper/791/218/HD-wallpaper-blue-butterfly-aesthetic-clouds-glitter-sky-summer.jpg"
            >
              <img
                className="card-img-top card-img-back"
                src={this.state.imageURL}
                alt={this.state.imageAlt}
              />
            </a>

            {/* <!-- Actions --> */}
            <div className="card-actions d-flex justify-content-center">
              <span className="card-action">
                <button className="btn btn-xs btn-circle btn-white-primary">
                  <AiOutlineEye />
                </button>
              </span>
              <span className="card-action">
                <button className="btn btn-xs btn-circle btn-white-primary">
                  <PiShoppingCartLight />
                </button>
              </span>
              <span className="card-action">
                <button className="btn btn-xs btn-circle btn-white-primary">
                  <AiOutlineHeart />
                </button>
              </span>
            </div>
          </div>

          {/* <!-- Body --> */}
          <div className="card-body px-0">
            {/* <!-- Name --> */}
            <div className="fw-bold">
              <h5 class="fw-bold text-body" href="product.html">
                {this.state.name}
              </h5>
            </div>

            {/* <!-- Origin --> */}
            <div className="d-flex fs-xs">
              <p>
                <span className="badge btn-secondary">
                  {" "}
                  {this.state.origin}{" "}
                </span>{" "}
              </p>
              <p>
                <span className="badge b btn-danger">
                  {" "}
                  {this.state.category}
                </span>{" "}
              </p>
            </div>

            {/* <!-- Description --> */}
            <div>
              <p>{this.state.description}</p>
            </div>

            {/* <!-- Price --> */}
            <div class="fw-bold text-muted">${this.state.price}</div>
          </div>
        </div>
      </div>
    );
  }
}
