import React, { useState } from 'react';
import './Preferencias.css';

const Preferencias = ({ usuario, onSavePreferences }) => {
  const [preferencias, setPreferencias] = useState({
    promocionales: usuario.promocionales || false,
    notificaciones: usuario.notificaciones || false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setPreferencias((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSave = () => {
    // Llamar a la función `onSavePreferences` para guardar las preferencias en el backend o en el estado global
    onSavePreferences(preferencias);
  };

  return (
    <div className="preferencias-container">
      <h3>Preferencias de Comunicación</h3>
      <div className="detalle-preferencia">
        <label>¿Recibir correos promocionales?</label>
        <input
          type="checkbox"
          name="promocionales"
          checked={preferencias.promocionales}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="detalle-preferencia">
        <label>¿Recibir notificaciones push?</label>
        <input
          type="checkbox"
          name="notificaciones"
          checked={preferencias.notificaciones}
          onChange={handleCheckboxChange}
        />
      </div>

      <button className="guardar-boton" onClick={handleSave}>
        Guardar Preferencias
      </button>
    </div>
  );
};

export default Preferencias;
