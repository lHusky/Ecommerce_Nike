import React, { useState } from 'react';
import Logo from '../../../assets/logo_nikes.png';
import Jump from '../../../assets/JumpLogoNike.png';

const RegistroUsuario = () => {
  return (
        <div class="parte1">
            <div class="parte2">
                <div class="parte3">
                    <div class="parte4">
                        <a href="https://www.nike.com.pe/home" class="imagen1"><img src={Logo} alt="Logo" /></a>
                        <a href="https://www.nike.com.pe/home" class="imagen2"><img src={Jump} alt="Logo Jump" /></a>
                    </div>
                    <span class="Titulo">Es hora de convertirte en un miembro de Nike.com.pe</span>
                    <div>
                        <form action="">
                            <div>
                                <span class="mensag-codigo">Te enviamos un código a</span>
                            </div>
                            <div class="Correo">
                                <span class="Email">yersdani.2019@gmail.com</span>
                                <a class="link" href="/iniciarSesion">Editar</a>
                            </div>
                            <div class="Codigo">
                                <label for="email" class="colorCodigo">* Correo Electrónico</label>
                                <input type="text" id="email" placeholder="tuemail@ejemplo.com" required/>
                            </div>
                            <div class="Terminos">
                                <p class="textoTerminos">
                                <span>Inicia sesión y obtén <strong>envíos gratis</strong> ⚡ Al continuar, aceptas la</span>&nbsp;
                                <a class="link" href="https://www.nike.com.pe/politicas-de-privacidad.html" target="_blank">Política de Privacidad</a>&nbsp;
                                <span>y los</span>&nbsp;
                                <a class="link" href="https://www.nike.com.pe/terminos-y-condiciones.html" target="_blank">Términos y Condiciones</a>&nbsp;
                                <span>de Nike.com.pe</span>
                                </p>
                            </div>
                            <button type="submit" class="botonContinuar">Continuar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default RegistroUsuario;