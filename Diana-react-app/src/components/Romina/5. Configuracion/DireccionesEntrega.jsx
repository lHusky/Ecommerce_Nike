import React, { useState } from "react";
import "./DireccionesEntrega.css";

const DireccionesEntrega = () => {
  const [direcciones, setDirecciones] = useState([]);

  const handleAgregarDireccion = () => {
    // Aquí podrías abrir un modal o redirigir a un formulario de creación de dirección.
    alert("Funcionalidad para agregar nueva dirección en desarrollo");
  };

  return (
    <div className="direcciones-entrega">
      <h2>Direcciones de entrega guardadas</h2>
      {direcciones.length === 0 ? (
        <div className="sin-direcciones">
          <p>Actualmente no tienes ninguna dirección de envío guardada.</p>
          <p>
            Agrega una dirección aquí para que se complete automáticamente y
            puedas finalizar la compra más rápido.
          </p>
          <button onClick={handleAgregarDireccion} className="boton-agregar">
            Agregar nueva dirección
          </button>
        </div>
      ) : (
        <div className="lista-direcciones">
          {direcciones.map((direccion, index) => (
            <div key={index} className="direccion">
              <p>
                <strong>{direccion.nombre}</strong>
              </p>
              <p>{direccion.direccion}</p>
              <p>{direccion.ciudad}, {direccion.codigoPostal}</p>
              <p>{direccion.pais}</p>
            </div>
          ))}
          <button onClick={handleAgregarDireccion} className="boton-agregar">
            Agregar nueva dirección
          </button>
        </div>
      )}
    </div>
  );
};

export default DireccionesEntrega;
