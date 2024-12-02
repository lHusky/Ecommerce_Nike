import React, { useState, useEffect } from 'react';
import Logo from '../../../assets/logo_nikes.png';
import Jump from '../../../assets/JumpLogoNike.png';
import Reenviar from '../../../assets/Reenviar.png';
import Ver from '../../../assets/Ver.png';
import './RegistroUsuario.css';

const RegistroUsuario = ({ email }) => {
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Enviar código automáticamente al cargar la página
  useEffect(() => {
    const sendCode = async () => {
      try {
        const response = await fetch("http://localhost:4001/usuario/send-code", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          console.log("Código enviado automáticamente al correo:", email);
        } else {
          console.error("Error al enviar el código automáticamente.");
        }
      } catch (error) {
        console.error("Error en la solicitud automática de envío de código:", error);
      }
    };

    sendCode();
  }, [email]);

  // Reenviar código al hacer clic en el botón
  const handleResendCode = async () => {
    try {
      const response = await fetch("http://localhost:4001/usuario/send-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Código reenviado al correo.");
      } else {
        alert("Error al reenviar código.");
      }
    } catch (error) {
      console.error("Error reenviando código:", error);
    }
  };

  // Manejo del formulario de registro
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert('Debes aceptar los términos y condiciones para continuar.');
      return;
    }

    const code = document.querySelector(".Codigo input").value;

    try {
      // Verificar el código
      const verifyResponse = await fetch("http://localhost:4001/usuario/verify-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, code }),
      });

      if (!verifyResponse.ok) {
        alert("Código incorrecto o expirado.");
        return; // Detener si el código no es válido
      }

      // Si el código es válido, continuar con el registro
      const usuario = {
        Email: email,
        Nombre: document.querySelector(".Nombre input").value,
        Apellido: document.querySelector(".Apellido input").value,
        password: document.querySelector(".Contraseña input").value,
        TipodeDocumento: document.querySelector(".TipoDocumento select").value,
        NumeroDocumento: document.querySelector(".NumeroDocumento input").value,
        Genero: document.querySelector(".PreferenciaCompra select").value,
        FechaNacimiento: document.querySelector(".FechaNacimiento input").value,
      };

      const registerResponse = await fetch("http://localhost:4001/usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      if (registerResponse.ok) {
        alert("Usuario registrado con éxito");
      } else {
        alert("Error al registrar usuario");
      }
    } catch (error) {
      console.error("Error durante el proceso:", error);
      alert("Hubo un error durante el registro.");
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
                <span className="Email">{email}</span>
                <a className="link" href="/iniciarSesion">Editar</a>
              </div>
              <div className="Codigo">
                <input type="text" placeholder="* Código" required />
                <button type="button" onClick={handleResendCode} className="ReenviarCodigo">
                  <img src={Reenviar} alt="Logo Reenviar" />
                </button>
                <div className="resend-msg">Reenviar código en <span id="contador">30</span> s</div>
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
                <select required defaultValue="">
                  <option value="" disabled>* Tipo de documento</option>
                  <option value="dni">DNI</option>
                  <option value="passport">Pasaporte</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              <div className="NumeroDocumento">
                <input type="text" placeholder="* Número de Documento" required />
              </div>
              <div className="PreferenciaCompra">
                <select required defaultValue="">
                  <option value="" disabled>* Preferencia de compra</option>
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
