import React from 'react';
import Carousel from './Carrusel';
import './Perfil.css';

const Perfil = () => {
  const benefits = [
    {
      image: '/assets/carrusel-enviogratis.jpg',
      title: 'Envío gratis',
      description: 'Disfruta del envío gratuito en tus compras.',
    },
    {
      image: '/assets/carrusel-productoexclusivo.jpg',
      title: 'Producto exclusivo',
      description: 'Acceso a productos exclusivos.',
    },
    {
      image: '/assets/carrusel-entrenamiento.jpg',
      title: 'Apps de entrenamiento',
      description: 'Accede a apps gratuitas para entrenamiento.',
    },
    {
      image: '/assets/carrusel-acceso.jpg',
      title: 'Acceso anticipado',
      description: 'Sé el primero en obtener nuevos productos.',
    },
  ];

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <h1>Romina Rebaza</h1>
        <p>Miembro de Nike desde Octubre 2024</p>
      </div>
      <div className="perfil-benefits">
        <h2>Beneficios</h2>
        <Carousel items={benefits} />
      </div>
    </div>
  );
};

export default Perfil;
