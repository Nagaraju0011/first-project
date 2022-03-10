import React from "react";
import { Link, NavLink } from "react-router-dom";


const Header = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><i className="bi bi-instagram"></i> First App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" aria-current="page" to="/aboutus">About Us</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" aria-current="page" to="/contactus">Contact Us</NavLink>
                            </li>
                            
                        </ul>
                        <form className="d-flex ms-5">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header;