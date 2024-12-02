import React, { useState } from 'react';
import Logo from '../../../assets/logo_nikes.png';
import Jump from '../../../assets/JumpLogoNike.png';
import Reenviar from '../../../assets/Reenviar.png';
import Ver from '../../../assets/Ver.png';
import './RegistroUsuario.css';

const RegistroUsuario = () => {

    const [acceptTerms, setAcceptTerms] = useState(false);  

    const handleFormSubmit = (e) => {
        if (!acceptTerms) {
          e.preventDefault();
          alert('Debes aceptar los términos y condiciones para continuar.');
          }
        };

    


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
          <span className="Titulo">Es hora de convertirte en un miembro de Nike.com.pe</span>
          <div>
            <form onSubmit={handleFormSubmit}>
              <div>
                <span className="mensag-codigo">Te enviamos un código a</span>
              </div>
              <div className="Correo">
                <span className="Email">yersdani.2019@gmail.com</span>
                <a className="link" href="/iniciarSesion">Editar</a>
              </div>
              <div className="Codigo">
                <input type="text" placeholder="* Código" required />
                <button className="ReenviarCodigo">
                  <img src={Reenviar} alt="Logo Reenviar" />
                </button>
                <div className="resend-msg"> Reenviar código en <span id="contador">30</span> s</div>
              </div>
              <div className="NombreApellido">
                <div className="Nombre">
                  <input type="text" placeholder="* Nombre" required />
                </div>
                <div className="Apellido">
                  <input type="text" placeholder="* Apellido" required />
                </div>
              </div>
              <div className="Contraseña">
                <input type="password" placeholder="* Contraseña" required />
                <button className="verContraseña">
                  <img src={Ver} alt="Ver Contraseña" />
                </button>
              </div>
              <div className="condiciones">
                <div className="condicion condicion1">
                  ✘ <span>Mínimo de 8 caracteres</span>
                </div>
                <div className="condicion condicion2">
                  ✘ <span>Mayúsculas, minúsculas y un número</span>
                </div>
              </div>
              <div className="TipoDocumento">
                <select required>
                  <option value="" disabled selected>* Tipo de documento</option>
                  <option value="dni">DNI</option>
                  <option value="passport">Pasaporte</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              <div className="NumeroDocumento">
                <input type="text" placeholder="* Número de Documento" required />
              </div>
              <div className="PreferenciaCompra">
                <select required>
                  <option value="" disabled selected>* Preferencia de compra</option>
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
                  <option value="unisex">Unisex</option>
                </select>
              </div>
              <div className="FechaNacimiento">
                <input type="date" placeholder="* Fecha de nacimiento" required />
              </div>
              <div className="Terminos">
                <p className="textoCentrado">
                  Obtén una recompensa como miembro de Nike Perú en tu cumpleaños
                </p>
                <div className="checkboxContainer">
                  <label>
                    <input
                      type="checkbox"
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                    />
                    Autorizo a Equinox International SAC al tratamiento de mi
                    información personal para fines de contacto comercial,
                    publicidad, análisis de perfiles, análisis de interacciones
                    con la compañía, envío de mensajes comerciales personalizados
                    y/o cualquier otra finalidad relacionada a estas.
                  </label>
                </div>
                <div className="checkboxContainer">
                  <label>
                    <input
                      type="checkbox"
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      required
                    />
                    He leído y acepto la&nbsp;
                    <a
                      className="link"
                      href="https://www.nike.com.pe/politicas-de-privacidad.html"
                      target="_blank"
                    >
                      Política de Privacidad
                    </a>
                    &nbsp;y los&nbsp;
                    <a
                      className="link"
                      href="https://www.nike.com.pe/terminos-y-condiciones.html"
                      target="_blank"
                    >
                      Términos y Condiciones
                    </a>
                    &nbsp;del uso del sitio web.
                  </label>
                </div>
              </div>
              <button type="submit" className="botonContinuar" disabled={!acceptTerms}>
                Continuar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroUsuario;
