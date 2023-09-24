import React from 'react';
import '../styles/RatingStars.scss'; // Créez un fichier CSS pour les étoiles

function RatingStars({ filledStars }) {
  const starElements = [];

  for (let i = 1; i <= 5; i++) {
    const starClassName = i <= filledStars ? 'fas fa-star' : 'far fa-star';
    starElements.push(<i className={starClassName} key={i}></i>);
  }

  return <div className="rating-stars">{starElements}</div>;
}

export default RatingStars;

