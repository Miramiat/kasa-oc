
import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import '../styles/NotFound.scss';
import '../pages/ApartmentDscrpt';


function NotFound() {
  return (
    
    <div>
      <h4 className='NotF-h'>404</h4>
      <h6 className='NotF-h6'>Oups! La page que vous demandez n'existe pas.</h6>
      <p className='NotF-p'>Retourner sur la page d’accueil</p>
    </div>
   
  );
}

export default NotFound;
