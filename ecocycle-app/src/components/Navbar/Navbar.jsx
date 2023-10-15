import React from 'react';
import { Link } from 'react-router-dom';


import './Navbar.css';

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="logo">
                <h1 className="logo-text">EcoCycle</h1>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/signup" className="nav-link">
                        Sign Up
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
