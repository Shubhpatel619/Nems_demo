// export default function NavBar(props) {
//     return (
//         // <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="/">{props.title}</a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-current="page" href="/">Home</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="/">About</a>
//                         </li>
//                     </ul>
//                     <form className="d-flex" role="search">
//                         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                         <button className="btn btn-outline-success" type="submit">Search</button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     )
// }









import React from 'react';
// Import NavLink to handle the 'active' state automatically
import { NavLink } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
            <div className="container-fluid">
                {/* Removed 'border' attribute to fix the React DOM error */}
                <NavLink className="navbar-brand fw-bold" to="/">{props.title}</NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                // This function applies bold weight and a blue underline when the link is active
                                style={({ isActive }) => ({
                                    fontWeight: isActive ? 'bold' : 'normal',
                                    borderBottom: isActive ? '2px solid #0d6efd' : 'none',
                                    color: isActive ? '#fff' : 'rgba(255,255,255,0.55)'
                                })}
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                style={({ isActive }) => ({
                                    fontWeight: isActive ? 'bold' : 'normal',
                                    borderBottom: isActive ? '2px solid #0d6efd' : 'none',
                                    color: isActive ? '#fff' : 'rgba(255,255,255,0.55)'
                                })}
                                to="/about"
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
