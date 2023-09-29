import React from 'react';
import logo from '../assets/LOGO.png';
import '../styles/Navbar.scss';
import {Link, NavLink} from "react-router-dom"

function Navbar() {
  
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <nav className="navbar nav">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo de l'application" className="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink className='link'     to="/"       
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } >Accueil</NavLink>
        </li>
        <li>
          <NavLink className='link'  to="/about"        style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>À Propos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

