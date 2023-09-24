import React from 'react';
import '../styles/Details.scss';
import Collapse from './Collapse'; 

function Details({ description, equipments }) {
  return (
    <div className="details-container"> 
      
      <Collapse className='description' title="Description">
        <div className="DE">
          <p className='detail'>{description}</p>
        </div>
      </Collapse>

      <Collapse  className='equipement'title="Équipements">
        <div className="DE">
          <ul className='detail'>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
      </Collapse>
    </div>
  );
}

export default Details;


