import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function NavBar({ title }) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Automatically close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
            <div className="container-fluid">

                {/* Brand */}
                <NavLink className="navbar-brand fw-bold" to="/">
                    {title}
                </NavLink>

                {/* Hamburger Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Menu */}
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className="nav-link"
                                style={({ isActive }) => ({
                                    fontWeight: isActive ? 'bold' : 'normal',
                                    borderBottom: isActive ? '2px solid #0d6efd' : 'none',
                                    color: isActive ? '#fff' : 'rgba(255,255,255,0.55)',
                                })}
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className="nav-link"
                                style={({ isActive }) => ({
                                    fontWeight: isActive ? 'bold' : 'normal',
                                    borderBottom: isActive ? '2px solid #0d6efd' : 'none',
                                    color: isActive ? '#fff' : 'rgba(255,255,255,0.55)',
                                })}
                            >
                                About
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}