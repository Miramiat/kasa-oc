
import React from 'react';
import Banner from '../components/Banner';
import ApartmentCards from '../components/ApartmentCards';
import HomeImage from '../assets/home-banner.png'; 

function Home() {
  const homeTitle = "Chez vous, partout et ailleurs"; 
  return (
    <div>
      
      <Banner title={homeTitle} image={HomeImage} />
      {location.pathname === '/' ? <ApartmentCards /> : null}
      {location.pathname.startsWith('/apartments/') ? (
        <div>
          {<ApartmentDscrpt />}
        </div>
      ) : null}      
    </div>
  
  );
}

export default Home;





