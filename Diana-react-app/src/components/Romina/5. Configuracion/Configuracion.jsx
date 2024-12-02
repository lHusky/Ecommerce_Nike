import React, { useState } from "react";
import "./Configuracion.css";

const Configuracion = () => {
  const [nombre, setNombre] = useState("Romina");
  const [apellido, setApellido] = useState("Rebaza");
  const [correo, setCorreo] = useState("rominagrc19@gmail.com");
  const [contraseña, setContraseña] = useState("********");
  const [guardado, setGuardado] = useState(false);

  const handleGuardar = () => {
    setGuardado(true);
    setTimeout(() => setGuardado(false), 3000);
    console.log({
      nombre,
      apellido,
      correo,
      contraseña,
    });
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
        <div className="contenido">
          <h2>Detalles de la cuenta</h2>
          <form className="formulario-detalles">
            <label>
              Nombre:
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </label>
            <label>
              Apellido:
              <input
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </label>
            <label>
              Tipo de documento:
              <input type="text" value="DNI" readOnly />
            </label>
            <label>
              Número de documento:
              <input type="text" value="72561565" readOnly />
            </label>
            <label>
              Fecha de nacimiento:
              <input type="text" value="23/09/2003" readOnly />
            </label>
            <label>
              Correo electrónico:
              <input
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </label>
            <label>
              Contraseña:
              <input
                type="password"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
              />
            </label>
            <button type="button" onClick={handleGuardar}>
              Guardar
            </button>
            {guardado && <p className="mensaje-guardado">¡Cambios guardados!</p>}
          </form>
        </div>
      </main>
    </div>
  );
};

export default Configuracion;
