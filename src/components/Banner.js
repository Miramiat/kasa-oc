import React from 'react';
import '../styles/Banner.scss';
import PropTypes from 'prop-types';

function Banner({ title, image }) {


  return (
    <div className="banner">
      {title && <h1 className='lmg-title'>{title}</h1>}
      {image && <img className='banner-image' src={image} alt="Bannière" />}
      
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string, // Le titre est désormais optionnel
  image: PropTypes.string, // L'image est désormais optionnelle
};

export default Banner;

