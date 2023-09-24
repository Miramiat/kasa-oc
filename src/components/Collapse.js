import React, { useState } from 'react';
import '../styles/Collapse.scss';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <span>{title}</span>
        <div className={`arrow ${isOpen ? 'open' : ''}`}>
          <i className="fas fa-angle-up"></i>
        </div>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;

