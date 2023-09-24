import React from 'react';
import RatingStars from './RatingStars'; 
import '../styles/AutresDetails.scss'; 

function AutresDetails({ host, location, tags, rating, title }) {
  return (
    <div className='autres-details'>
       
      <div className='AD-title'>
        <h2 className='A-title'>{title}</h2>
        <p>{location}</p>
        <ul className='AD-liste'>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className='AD-dp'>
        <div className='AD-dc'>
          <p>{host.name}</p>
          <img src={host.picture} alt={`Photo de ${host.name}`} />
        </div>
        <RatingStars filledStars={parseInt(rating)} />
      </div>
    </div>
  );
}


export default AutresDetails;


