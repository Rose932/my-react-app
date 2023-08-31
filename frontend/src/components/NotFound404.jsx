import React from "react";

class NotFound extends React.Component {
    render() {
        return(
            <div className="card m-3" style={{width: '40rem'}}>
                <img src="https://cdn.pixabay.com/photo/2014/11/03/11/07/lion-515028_640.jpg" className="card-img-top" alt="Lion king of the jungle"/>
                <div className="card-body">
                    <h1>404 Page Not Found</h1>
                    <h5 className="card-title">Sorry, the page you are looking for does not exist.</h5>
                </div>
            </div>
        )
    }
}

export default NotFound;