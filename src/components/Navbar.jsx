import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; // <--- CHANGE THIS LINE

function Navbar() {
  return (
    // No changes needed here unless you removed inline styles that are now in CSS
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
        &lt;dev.pratheeksha /&gt;
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          // Remove inline styles if you moved them to CSS:
          // style={{borderColor: 'var(--accent-light-blue)'}}
        >
           <span
             className="navbar-toggler-icon"
             // Remove inline styles if you moved them to CSS:
             // style={{ filter: 'invert(1) brightness(2)' }}
           ></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* Use a function with NavLink in React Router v6 to check isActive */}
              <NavLink
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                to="/skillset"
               >
                Skillset
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                 className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                 to="/resume"
              >
                Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                to="/contact"
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;