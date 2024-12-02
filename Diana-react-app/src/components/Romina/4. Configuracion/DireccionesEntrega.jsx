import React, { useState } from 'react';
import './Direcciones.css';

const Direcciones = () => {
  const [direcciones, setDirecciones] = useState([
    {
      id: 1,
      direccion: 'Av. Pardo 123, Lima',
      departamento: 'Lima',
      provincia: 'Lima',
      distrito: 'Miraflores',
    },
  ]);

  const [nuevaDireccion, setNuevaDireccion] = useState({
    direccion: '',
    departamento: '',
    provincia: '',
    distrito: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevaDireccion({ ...nuevaDireccion, [name]: value });
  };

  const handleAgregarDireccion = () => {
    setDirecciones([
      ...direcciones,
      { id: direcciones.length + 1, ...nuevaDireccion },
    ]);
    setNuevaDireccion({ direccion: '', departamento: '', provincia: '', distrito: '' });
  };

  const handleEliminarDireccion = (id) => {
    setDirecciones(direcciones.filter((direccion) => direccion.id !== id));
  };

  return (
    <div className="direcciones-container">
      <h2>Direcciones de entrega</h2>

      {/* Lista de direcciones guardadas */}
      <div className="lista-direcciones">
        {direcciones.map((direccion) => (
          <div className="direccion-item" key={direccion.id}>
            <div className="direccion-detalles">
              <p>{direccion.direccion}</p>
              <p>{direccion.departamento}, {direccion.provincia}, {direccion.distrito}</p>
            </div>
            <button
              className="eliminar-boton"
              onClick={() => handleEliminarDireccion(direccion.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      {/* Agregar nueva dirección */}
      <div className="agregar-direccion">
        <h3>Agregar nueva dirección</h3>
        <input
          type="text"
          name="direccion"
          value={nuevaDireccion.direccion}
          onChange={handleChange}
          placeholder="Dirección"
        />
        <input
          type="text"
          name="departamento"
          value={nuevaDireccion.departamento}
          onChange={handleChange}
          placeholder="Departamento"
        />
        <input
          type="text"
          name="provincia"
          value={nuevaDireccion.provincia}
          onChange={handleChange}
          placeholder="Provincia"
        />
        <input
          type="text"
          name="distrito"
          value={nuevaDireccion.distrito}
          onChange={handleChange}
          placeholder="Distrito"
        />
        <button onClick={handleAgregarDireccion} className="guardar-direccion">
          Guardar dirección
        </button>
      </div>
    </div>
  );
};

export default Direcciones;
