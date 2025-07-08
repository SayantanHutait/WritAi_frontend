import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <NavLink className="navbar-brand" to="/">WritAi</NavLink>

            {/* Remove the default navbar toggler on small screens */}
            <div className="d-lg-none ms-auto">
                {/* User Icon Dropdown for small screen */}
                <div className="dropdown">
                    <button
                        className="btn btn-dark border-0"
                        id="userDropdownSm"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fillRule="evenodd"
                                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 
                                  11.37C3.242 11.226 4.805 10 8 10s4.757 
                                  1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end mt-2" aria-labelledby="userDropdownSm">
                        <li>
                            <NavLink className="dropdown-item" to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink className="dropdown-item" to="/signup">Sign Up</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Collapse for larger screens only */}
            <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    {/* User Icon Dropdown */}
                    <li className="nav-item dropdown">
                        <button
                            className="btn btn-dark border-0"
                            id="userDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fillRule="evenodd"
                                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 
                                      11.37C3.242 11.226 4.805 10 8 10s4.757 
                                      1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end mt-2" aria-labelledby="userDropdown">
                            <li>
                                <NavLink className="dropdown-item" to="/login">Login</NavLink>
                            </li>
                            <li>
                                <NavLink className="dropdown-item" to="/signup">Sign Up</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
