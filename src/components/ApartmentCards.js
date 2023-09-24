import React from 'react';
import annoncesData from '../datas/Annonces.json';
import { Link } from 'react-router-dom'; 
import '../styles/ApartmentCards.scss';

function ApartmentCards() {
  return (
    <div className="apartment-cards">
      {annoncesData.map((annonce) => (
        <Link className="apartment-card" to={`/apartments/${annonce.id}`} key={annonce.id}>
          <div >
            <img src={annonce.cover} alt={annonce.title} />
            <div className="FadeAway">{}</div>
            <h2>{annonce.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ApartmentCards;

