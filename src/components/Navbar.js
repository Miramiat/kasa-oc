import React from 'react';
import logo from '../assets/LOGO.png';
import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar nav">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo de l'application" className="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link className='link' to="/">Accueil</Link>
        </li>
        <li>
          <Link className='link' to="/about">À Propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

