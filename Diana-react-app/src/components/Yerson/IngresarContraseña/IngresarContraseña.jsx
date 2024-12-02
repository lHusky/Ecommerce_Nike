import React, { useState } from 'react';
import Logo from '../../../assets/logo_nikes.png';
import Jump from '../../../assets/JumpLogoNike.png';
import Ver from '../../../assets/Ver.png';
import './IngresarContraseña.css';

const IngresarContraseña = ({ email }) => {
    console.log("Email recibido en IngresarContraseña:", email); // Depuración

  return (
    <div className="parte1">
      <div className="parte2">
        <div className="parte3">
          <div className="parte4">
            <a href="https://www.nike.com.pe/home" className="imagen1">
              <img src={Logo} alt="Logo" />
            </a>
            <a href="https://www.nike.com.pe/home" className="imagen2">
              <img src={Jump} alt="Logo Jump" />
            </a>
          </div>
          <span className="Titulo">¿Cuál es tu contraseña?</span>
          <div>
            <form >
              <div className="Correo">
                <span className="Email">{email}</span> {/* Muestra el correo recibido */}
                <a className="link" href="/iniciarSesion">Editar</a>
              </div>
              <div className="Contraseña">
                <input type="password" placeholder="* Contraseña" required />
                <button className="verContraseña">
                  <img src={Ver} alt="Ver Contraseña" />
                </button>
              </div>
              <div>
              <a className="link" href="/iniciarSesion">¿Olvidaste tu contraseña?</a>
              </div>
              <button type="submit" className="botonIniciarSesion">
                Iniciar Sesion
              </button>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngresarContraseña;