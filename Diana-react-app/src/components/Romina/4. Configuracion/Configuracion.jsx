import React, { useState } from 'react';
import './Configuracion.css';

const Configuracion = () => {
  const [datos, setDatos] = useState({
    nombre: 'Romina',
    apellido: 'Rebaza',
    tipoDocumento: 'DNI',
    numeroDocumento: '72561565',
    correo: 'rominagrc19@gmail.com',
    telefono: '',
    fechaNacimiento: '23/09/2003',
    contraseña: '********',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  const handleGuardar = () => {
    alert('Cambios guardados exitosamente');
  };

  return (
    <div className="configuracion">
      <aside className="menu-lateral">
        <ul>
          <li className="activo">Detalles de la cuenta</li>
          <li>Direcciones de entrega</li>
          <li>Preferencias de comunicación</li>
        </ul>
      </aside>
      <main className="contenido-principal">
        <h2>Detalles de la cuenta</h2>

        {/* Nombre */}
        <div className="detalle-configuracion">
          <label>* Nombre</label>
          <input
            type="text"
            name="nombre"
            value={datos.nombre}
            onChange={handleInputChange}
          />
        </div>

        {/* Apellido */}
        <div className="detalle-configuracion">
          <label>* Apellido</label>
          <input
            type="text"
            name="apellido"
            value={datos.apellido}
            onChange={handleInputChange}
          />
        </div>

        {/* Tipo de documento */}
        <div className="detalle-configuracion">
          <label>* Tipo de documento</label>
          <input type="text" value={datos.tipoDocumento} disabled />
        </div>

        {/* Número de documento */}
        <div className="detalle-configuracion">
          <label>* Número de Documento</label>
          <input type="text" value={datos.numeroDocumento} disabled />
        </div>

        {/* Correo electrónico */}
        <div className="detalle-configuracion">
          <label>* Correo electrónico</label>
          <input
            type="email"
            name="correo"
            value={datos.correo}
            onChange={handleInputChange}
          />
        </div>

        {/* Número de teléfono */}
        <div className="detalle-configuracion">
          <label>* Número de teléfono</label>
          <input
            type="text"
            name="telefono"
            value={datos.telefono || 'No registrado'}
            onChange={handleInputChange}
          />
        </div>

        {/* Fecha de nacimiento */}
        <div className="detalle-configuracion">
          <label>* Fecha</label>
          <input type="text" value={datos.fechaNacimiento} disabled />
        </div>

        {/* Contraseña */}
        <div className="detalle-configuracion contraseña-config">
          <label>Contraseña</label>
          <input type="password" value={datos.contraseña} disabled />
        </div>

        {/* Botón Guardar */}
        <button className="guardar-boton" onClick={handleGuardar}>
          Guardar
        </button>
      </main>
    </div>
  );
};

export default Configuracion;
