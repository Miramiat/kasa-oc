import React, { useState } from 'react';
import '../styles/Slide.scss';

function Slide({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="slide">
      {images.length > 1 && ( // Condition pour afficher les flèches et la numérotation
        <>
          <button className="prev-arrow" onClick={prevSlide}>
            &#8249;
          </button>
          <button className="next-arrow" onClick={nextSlide}>
            &#8250;
          </button>
          <div className="slide-counter">
            {currentImage + 1}/{images.length}
          </div>
        </>
      )}

      <img
        src={images[currentImage]}
        alt={`Image ${currentImage}`}
        className="slide-image"
      />
    </div>
  );
}

export default Slide;






