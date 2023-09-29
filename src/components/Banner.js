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
  title: PropTypes.string, 
  image: PropTypes.string, 
};

export default Banner;

