import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      username: this.props.username,
      email: this.props.email,
      phone: this.props.phone,
      imageURL: this.props.imageURL,
      imageAlt: this.props.imageAlt,
    };

    /**
     * TODO:
     *
     * 1. Bind the class function to the react component.
     *
     * Reference (Binding in React): https://reactjs.org/docs/handling-events.html
     */
    this.updateDetails = this.updateDetails.bind(this);
  }

  /**
   * TODO:
   *
   * 1. Create a function that will update the state of the component with new details.
   *
   * 2. Create a constant variable called personalDetails that will hold an array of objects that
   *   contain personal details such as name, username, email, and phone number.
   *
   * 3. Create a constant variable called randomNum that will generate a random number between 0 and 4.
   *
   * 4. Use this.setState() to update the state of the component with the new details.
   *
   * 5. Use the random number to select a random object from the personalDetails array.
   *
   *
   * Reference (State and Lifecycle): https://reactjs.org/docs/state-and-lifecycle.html
   */
  updateDetails = () => {
    // Create a list of personal details which will be randomly selected from
    // and dipslayed in the profile. Use a set interval to update the profile
    // every 5 seconds.
    const personalDetails = [
      ////////////////////// YOUR CODE STARTS HERE //////////////////

      {
        name: "Your Name",
        username: "@yournamex239",
        email: "yourmail@gmail.com",
        phone: "93758193",
        imageURL:
          "https://www.nawpic.com/media/2020/butterfly-aesthetic-nawpic-1.png",
        imageAlt: "Butterfly",
      },
      {
        name: "Jaylia",
        username: "@jaylia_travels",
        email: "jayliatravels@gmail.com",
        phone: "68729598",
        imageURL:
          "https://www.nawpic.com/media/2020/butterfly-aesthetic-nawpic-1.png",
        imageAlt: "Butterfly",
      },
      {
        name: "Olivia",
        username: "@_dog_lover",
        email: "olivia@gmail.com",
        phone: "923875924",
        imageURL:
          "https://www.nawpic.com/media/2020/butterfly-aesthetic-nawpic-1.png",
        imageAlt: "Butterfly",
      },
      {
        name: "Emma",
        username: "@emma_xo",
        email: "emmaxoxo@gmail.com",
        phone: "639628492",
        imageURL:
          "https://www.nawpic.com/media/2020/butterfly-aesthetic-nawpic-1.png",
        imageAlt: "Butterfly",
      },
      {
        name: "Alex",
        username: "@alex3719_gamer",
        email: "alexgamer@gmail.com",
        phone: "929859184",
        imageURL:
          "https://www.nawpic.com/media/2020/butterfly-aesthetic-nawpic-1.png",
        imageAlt: "Butterfly",
      },
      ////////////////////// YOUR CODE ENDS HERE ////////////////////
    ];

    // Generate a random number between 0 and 5
    const randomNum = Math.floor(Math.random() * 5);

    // Update the state of the component with the new details
    ////////////////////// YOUR CODE STARTS HERE //////////////////

    this.setState({
      name: personalDetails[randomNum].name,
      username: personalDetails[randomNum].username,
      email: personalDetails[randomNum].email,
      phone: personalDetails[randomNum].phone,
      imageURL: personalDetails[randomNum].imageURL,
      imageAlt: personalDetails[randomNum].imageAlt,
    });

    ////////////////////// YOUR CODE ENDS HERE ////////////////////
  };

  /**
   * > This function is called when a component is being created and inserted into the DOM. The
   * props and state parameters are the latest props and state values that will be used in the render
   * method. The value that this function returns will be set as the new state of the component.
   *
   *
   * @param { object } props This represents the new props that were passed to the component
   * @param { object } state This represents the current state of the component
   * @returns returns an object that represents the new state of the component
   */
  static getDerivedStateFromProps(props, state) {
    if (props.name !== state.name) {
      return { name: props.name };
    }
    if (props.username !== state.username) {
      return { username: props.username };
    }
    if (props.email !== state.email) {
      return { email: props.email };
    }
    if (props.phone !== state.phone) {
      return { phone: props.phone };
    }
    if (props.imageURL !== state.imageURL) {
      return { imageURL: props.imageURL };
    }
    if (props.imageAlt !== state.imageAlt) {
      return { imageAlt: props.imageAlt };
    }
    return null;
  }

  /**
   * > This function is called immediately after a component is mounted. This is a good place to
   * initiate API calls (External data), if you need to load data from a remote endpoint.
   *
   */
  componentDidMount() {
    console.log("Profile component mounted");
  }

  render() {
    return (
        <div className="card w-50">
          <img
            src={this.state.imageURL}
            className="card-img-top"
            alt={this.state.imageAlt}
          ></img>
          <div className="card-body">
            <h3 className="card-title">{this.state.name}</h3>
            <h5 className="card-title">{this.state.username}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span class="h5">Email: </span> {this.state.email}
            </li>
            <li className="list-group-item">
              <span class="h5">Phone: </span> {this.state.phone}
            </li>
          </ul>
          <div className="card-body"></div>
          {/**
           * TODO:
           *
           * 1. Create a button with the bootstrap class "btn btn-primary" and the text "Update".
           *
           * 2. Add an onClick event handler to the button that will call the updateDetails function.
           *
           * Reference (Handling Events): https://reactjs.org/docs/handling-events.html
           * Reference (Bootstrap Buttons): https://getbootstrap.com/docs/4.0/components/buttons/
           *
           */}
          <div>
            <button className="btn btn-info" onClick={this.updateDetails}>
              Update
            </button>

              <Link to="post" className="btn btn-info">Posts</Link>
          </div>
        </div>
    );
  }

  /**
   * > This function is called immediately before a component is destroyed. This is a good place to
   * perform any cleanup you need to do before the component is destroyed.
   *
   */
  componentWillUnmount() {
    console.log("Profile component will unmount");
  }
}
