import React, { useState } from 'react';
import './Body.css';
import Logo from '../../assets/logo_nikes.png';
import Jump from '../../assets/JumpLogoNike.png';

const Navegador = () => {

  return (
    <body>
        <div>
            <div>
                <div>
                    <div>
                        <img src={Logo} alt="Logo Nike" className='imagen_navegador1'/>
                        <img src={Jump} alt="Logo Jump" className='imagen_navegador2'/>
                        <span class="Titulo">Ingresa tu correo electrónico para unirte o iniciar sesión.</span>
                    </div>
                    <div>
                        <form action=""></form>
                    </div>
                </div>
            </div>
        </div>
    </body>
  );
};