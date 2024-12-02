import React from 'react';
import './Gracias.css';

const Gracias = () => {
  return (
    <div className="contenedor-gracias">
      <h1 className="titulo-gracias">¡Gracias por su compra!</h1>
      <p className="mensaje-gracias">
        Su pedido ha sido procesado exitosamente. Le enviaremos un correo electrónico con los detalles de su compra y el número de seguimiento.
      </p>
      <div className="detalles-pedido">
        <h2>Detalles del Pedido</h2>
        <p><strong>Número de Pedido:</strong> #123456789</p>
        <p><strong>Fecha:</strong> {new Date().toLocaleDateString()}</p>
        <p><strong>Total:</strong> $0.00</p>
      </div>
      <button className="boton-volver-inicio" onClick={() => window.location.href = '/'}>
        Volver al Inicio
      </button>
    </div>
  );
};

export default Gracias;
