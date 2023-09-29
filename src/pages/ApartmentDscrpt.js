import React from 'react';
import { useParams } from 'react-router-dom';
import annoncesData from '../datas/Annonces.json';
import Slide from '../components/Slide';
import Details from '../components/Details';
import AutresDetails from '../components/AutresDetails';
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom'; 

function ApartmentDscrpt() {
  const { id } = useParams();
  const apartment = annoncesData.find((apt) => apt.id === id);

  if (!apartment) {
    return <Navigate replace to="/notfoud" />
  }

  return (
    <div>
      <Slide images={apartment.pictures} />
      <AutresDetails
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









