import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* <!-- Navbar Brand --> */}
                <a className="navbar-brand" href="/">Navbar</a>

                <div>
                    {/* <!-- Left Links --> */}
                    <div className="d-flex justify-content-between me-auro mb-2 mb-lg-0">
                        <span className="nav-item">
                            <Link to='/' className='btn btn-dark'>Home</Link>
                        </span>
                        <span className="nav-item">
                            <Link to='profile' className='btn btn-dark'>Profile</Link>
                        </span>
                        <span className="nav-item">
                            <Link to='company' className='btn btn-dark'>Company</Link>
                        </span>
                        <span className="nav-item">
                            <Link to='address' className='btn btn-dark'>Address</Link>
                        </span>
                        <span className="nav-item">
                            <Link to='cart' className='btn btn-dark'>Cart</Link>
                        </span>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;