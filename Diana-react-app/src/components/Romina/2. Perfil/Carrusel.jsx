import React, { useState } from 'react';
import './Carrusel.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={handlePrev}>
        ◀
      </button>
      <div className="carousel-content">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? 'active' : ''
            }`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <img src={item.image} alt={item.title} className="carousel-image" />
            <div className="carousel-text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        ▶
      </button>
    </div>
  );
};

export default Carousel;
