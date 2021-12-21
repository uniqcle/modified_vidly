import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light vidly-navbar">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Vidly</Link>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/movies">Movies</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/customers">Customers</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/register">Register</NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;