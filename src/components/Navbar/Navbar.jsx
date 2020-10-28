import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="nav-item nav-link"> Home <span className="sr-only">(current)</span></Link>
                    <Link to="/projects" className="nav-item nav-link"> Projects </Link>
                    <Link className='nav-item nav-link' to="/documents/Resume-KennySeo.pdf" target="_blank" download>Resume</Link>
                    <Link to="/contact" className="nav-item nav-link"> Contact </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;