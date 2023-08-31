import React from "react";
import Navbar from "./Navbar";

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: this.props.companyName,
      catchPhrase: this.props.catchPhrase,
      motto: this.props.motto,
      companyNumber: this.props.companyNumber,
    };

    /**
     * TODO:
     *
     * 1. Bind the class function to the react component.
     *
     * Reference (Binding in React): https://reactjs.org/docs/handling-events.html
     */
    ////////////////////// YOUR CODE STARTS HERE ///////////////////

    this.updateCompany = this.updateCompany.bind(this);

    ////////////////////// YOUR CODE ENDS HERE /////////////////////
  }

  static getDerivedStateFromProps(props, state) {
    if (props.companyName !== state.companyName) {
     /* return { companyName: props.companyName }; */
    }
    /**
     * TODO:
     *
     * 1. Add more if statements to check for changes in the catchPhrase and motto properties. Check
     * whether the props and state values are different. If they are, return an object with the
     * updated values.
     *
     * Reference (React getDerivedStateFromProps): https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
     *
     */
    ////////////////////// YOUR CODE STARTS HERE ///////////////////

    if (props.catchPhrase !== state.catchPhrase) {
      return { catchPhrase: props.catchPhrase };
    }
    if (props.motto !== state.motto) {
      return { motto: props.motto };
    }
    if (props.companyNumber !== state.companyNumber) {
      return { companyNumber: props.companyNumber };
    }
    return null;
  }
  ////////////////////// YOUR CODE ENDS HERE /////////////////////

  /**
   * TODO:
   *
   * 1. Create a function called updateCompany that will update the state of the component with new company details.
   *
   * 2. Create a constant variable called companies that will hold an array of objects that
   *  contain company details such as companyName, catchPhrase, and motto.
   *
   * 3. Create a constant variable called randomNum that will generate a random number between 0 and 4.
   *
   * 4. Use this.setState() to update the state of the component with the new details.
   *
   * 5. Use the random number to select a random object from the companies array.
   *
   * Reference (State and Lifecycle): https://reactjs.org/docs/state-and-lifecycle.html
   */
  updateCompany = () => {
    // Create a list of companies which will be randomly selected from
    // and dipslayed in the profile. Use a set interval to update the company
    // every 5 seconds.
    const companies = [
      ////////////////////// YOUR CODE STARTS HERE ///////////////////
      {
        companyName: "Shop",
        catchPhrase: "nibh fringilla purus",
        motto: " ligula nibh accumsan",
        companyNumber: "8374832",
      },
      {
        companyName: "Food company",
        catchPhrase: " diam consectetur elit",
        motto: "Lorem ipsum dolor",
        companyNumber: "6934794",
      },
      {
        companyName: "Tea & Biscuits",
        catchPhrase: "Etiam libero leo",
        motto: " a molestie ligula",
        companyNumber: "38923749",
      },
      {
        companyName: "Deliverer",
        catchPhrase: "felis augue quis",
        motto: "eget rhoncus facilisis",
        companyNumber: "73017492",
      },
      {
        companyName: "Clothes & Shoes",
        catchPhrase: "Nunc ut erat",
        motto: "vulputate non hendrerit",
        companyNumber: "28381048",
      },
    ];
    ////////////////////// YOUR CODE ENDS HERE /////////////////////

    // Get a random number between 0 and 4
    const randomNum = Math.floor(Math.random() * 5);

    // Update the state with a randomly selected company
    ////////////////////// YOUR CODE STARTS HERE ///////////////////

    this.setState({
      companyName: companies[randomNum].companyName,
      catchPhrase: companies[randomNum].catchPhrase,
      motto: companies[randomNum].motto,
      companyNumber: companies[randomNum].companyNumber,
    });
    ////////////////////// YOUR CODE ENDS HERE /////////////////////
  };

  render() {
    return (
      <div className="card w-50">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Company: {this.state.companyName}</h4>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span class="h5">Catchphrase: </span>"{this.state.catchPhrase}"
            </li>
            <li className="list-group-item">
              <span class="h5">Motto: </span>"{this.state.motto}"
            </li>
            <li className="list-group-item">
              <span class="h5">Number: </span>{this.state.companyNumber}
            </li>
          </ul>
          <div className="card-body"></div>
        </div>
        {/**
         * TODO:
         *
         * 1. Create a button and assign it a bootstrap class of "btn btn-primary"
         * 2. Add an onClick event handler to the button that calls the updateCompany method
         *
         * Reference (Bootstrap Buttons): https://getbootstrap.com/docs/4.0/components/buttons/
         * Reference (React onClick Event Handler): https://reactjs.org/docs/handling-events.html
         *
         */}
        {/*////////////////////// YOUR CODE STARTS HERE //////////////////*/}

        <button className="btn btn-info" onClick={this.updateCompany}>
          Update Company
        </button>
      </div>
      /*////////////////////// YOUR CODE ENDS HERE ////////////////////*/
    );
  }
}

export default Company;
