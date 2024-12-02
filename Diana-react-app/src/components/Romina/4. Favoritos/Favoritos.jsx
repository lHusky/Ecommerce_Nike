import React from 'react';
import './Favoritos.css';

const Favoritos = () => {
  // Lista de productos favoritos (puedes agregar más productos dinámicamente)
  const favoritos = [
    {
      id: 1,
      name: 'Nike V2K Run',
      description: 'Productos',
      price: 'S/ 599.90',
      image: '/assets/carrusel-productoexclusivo.jpg',
    },
    // Agrega más productos aquí si lo deseas
  ];

  return (
    <div className="favoritos-container">
      <h1>Favoritos</h1>
      <div className="favoritos-grid">
        {favoritos.map((producto) => (
          <div key={producto.id} className="favoritos-item">
            <img src={producto.image} alt={producto.name} className="favoritos-image" />
            <div className="favoritos-info">
              <h3>{producto.name}</h3>
              <p>{producto.description}</p>
              <p className="favoritos-price">{producto.price}</p>
              <button className="favoritos-button">Agregar a Carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favoritos;
