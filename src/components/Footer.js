import React from 'react';
import logoB from '../assets/LOGO-B.png';
import '../styles/Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="logo-c">
        
          <img src={logoB} alt="Logo de l'application" className="logoB" />
       
      </div>
      <div>
        <p className='footer-p'>
         © 2020 Kasa. All rights reserved
        </p>

      </div>
    </footer>
  );
}

export default Footer;

