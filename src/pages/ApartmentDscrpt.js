import React from 'react';
import { useParams } from 'react-router-dom';
import annoncesData from '../datas/Annonces.json';
import Slide from '../components/Slide';
import Details from '../components/Details';
import AutresDetails from '../components/AutresDetails';
import { Link } from 'react-router-dom'; 

function ApartmentDscrpt() {
  const { id } = useParams();
  const apartment = annoncesData.find((apt) => apt.id === id);

  if (!apartment) {
    return <div className='NotF-d'>
            <h4 className='NotF-h'>404</h4>
            <h6 className='NotF-h6'>Oups! La page que vous demandez n'existe pas.</h6>
            <p className='NotF-p'><Link className='NotF-L' to="/">Retourner sur la page d’accueil</Link></p>

  </div>
  }

  return (
    <div>
      <Slide images={apartment.pictures} />
      <AutresDetails className="Bon"
        host={apartment.host}
        location={apartment.location}
        tags={apartment.tags}
        rating={apartment.rating}
        title={apartment.title} />
      <Details description={apartment.description} equipments={apartment.equipments} />
    </div>
  );
}

export default ApartmentDscrpt;









