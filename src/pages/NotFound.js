
import React from 'react';
import '../styles/NotFound.scss';
import '../pages/ApartmentDscrpt';
import { Link } from 'react-router-dom';


function NotFound() {
  return (
    
    <div>
      <h4 className='NotF-h'>404</h4>
      <h6 className='NotF-h6'>Oups! La page que vous demandez n'existe pas.</h6>
      <p className='NotF-p'><Link className='NotF-L' to="/">Retourner sur la page d’accueil</Link></p>
    </div>
   
  );
}

export default NotFound;
