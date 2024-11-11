// Carousel.js
import React from 'react';
import './Carousel.css';

const Carousel = ({ items, imageWidth, imageHeight, fontSize, textAlignment }) => {
    return (
        <div className="carousel">
            {/* recorrer la lista de productos/categorias */}
            {items.map((item, index) => (
                <article key={index} className="carousel-objeto" style={{ width: imageWidth, height: imageHeight }}>
                    <img src={item.image} alt={item.title} className="carousel-imagen" />
                    <div className="carousel-texto" style={{ fontSize, textAlign: textAlignment }}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default Carousel;
