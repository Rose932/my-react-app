import React from "react";
import Navbar from "./Navbar";

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      street: this.props.street,
      suite: this.props.suite,
      city: this.props.city,
      zipcode: this.props.zipcode,
    };

    /**
     * EXAMPLE IMPLEMENTATION:
     *
     * 1. Bind the class function to the react component.
     *
     * Reference (Binding in React): https://reactjs.org/docs/handling-events.html
     *
     */
    this.updateAddress = this.updateAddress.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.street !== state.street) {
      return { street: props.street };
    }
    /**
     * EXAMPLE IMPLEMENTATION:
     *
     * 1. Add the remaining address properties to the getDerivedStateFromProps() function. Check if the
     * props are different from the state and if so, return the new state.
     *
     * Reference (getDerivedStateFromProps): https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
     */
    if (props.suite !== state.suite) {
      return { suite: props.suite };
    }
    if (props.city !== state.city) {
      return { city: props.city };
    }
    if (props.zipcode !== state.zipcode) {
      return { zipcode: props.zipcode };
    }
    return null;
  }

  /**
   * EXAMPLE IMPLEMENTATION:
   *
   * 1. Create a function called updateAddress that will update the state of the component with new address details.
   *
   * 2. Create a constant variable called addresses that will hold an array of objects that
   *
   * 3. Create a constant variable called randomNum that will generate a random number between 0 and 4.
   *
   * 4. Use this.setState() to update the state of the component with the new details.
   *
   * 5. Use the random number to select a random object from the addresses array.
   *
   * Reference (State and Lifecycle): https://reactjs.org/docs/state-and-lifecycle.html
   */
  updateAddress = () => {
    // Create a list of addresses which will be randomly selected from
    // and dipslayed in the profile. Use a set interval to update the address
    // every 5 seconds.
    const addresses = [
      {
        street: "1234 Main Street",
        suite: "Apt. 123",
        city: "New York",
        zipcode: "12345-6789",
      },
      {
        street: "5678 Main Street",
        suite: "Apt. 456",
        city: "Los Angeles",
        zipcode: "98765-4321",
      },
      {
        street: "91011 Main Street",
        suite: "Apt. 789",
        city: "Chicago",
        zipcode: "12345-6789",
      },
      {
        street: "121314 Main Street",
        suite: "Apt. 101",
        city: "Houston",
        zipcode: "98765-4321",
      },
      {
        street: "151617 Main Street",
        suite: "Apt. 111",
        city: "Phoenix",
        zipcode: "12345-6789",
      },
    ];

    // Get a random number between 0 and 4
    const randomNum = Math.floor(Math.random() * 5);

    // Update the address state with the randomly selected address details
    this.setState({
      street: addresses[randomNum].street,
      suite: addresses[randomNum].suite,
      city: addresses[randomNum].city,
      zipcode: addresses[randomNum].zipcode,
    });
  };

  render() {
    return (
      <div className="card w-50">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Street: {this.state.street}</h4>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span class="h5">Suite: </span> {this.state.suite}
            </li>
            <li className="list-group-item">
              <span class="h5">City: </span> {this.state.city}
            </li>
            <li className="list-group-item">
              <span class="h5">Zipcode: </span> {this.state.zipcode}
            </li>
          </ul>
          <div className="card-body"></div>
        </div>
        {/**
         * EXAMPLE IMPLEMENTATION:
         *
         * 1. Create a button and assign it a bootstrap class of "btn btn-primary"
         * 2. Add an onClick event handler to the button that calls the updateCompany method
         *
         * Reference (Bootstrap Buttons): https://getbootstrap.com/docs/4.0/components/buttons/
         * Reference (React onClick Event Handler): https://reactjs.org/docs/handling-events.html
         *
         */}
        <button className="btn btn-info" onClick={this.updateAddress}>
          Update Address
        </button>
      </div>
    );
  }
}

export default Address;
