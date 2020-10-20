import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className='navbar-brand'> Kenny Seo </Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link"> Home </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link"> About </Link>
                </li>
                <li className="nav-item">
                    <Link to="/projects" className="nav-link"> Projects </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link"> Contact </Link>
                </li>
            </ul>
        </nav >
    )
}

export default Navbar;