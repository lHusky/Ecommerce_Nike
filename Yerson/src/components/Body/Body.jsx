import React, { useState } from 'react';
import './Body.css';
import Logo from '../../assets/logo_nikes.png';
import Jump from '../../assets/JumpLogoNike.png';

const Body = () => {

  return (
        <div class="parte1">
            <div class="parte2">
                <div class="parte3">
                    <div class="parte4">
                        <img src={Logo} alt="Logo Nike" className='imagen1'/>
                        <img src={Jump} alt="Logo Jump" className='imagen2'/>
                    </div>
                    <span class="Titulo">Ingresa tu correo electrónico para unirte o iniciar sesión.</span>
                    <div>
                        <form action="">
                            <div class="PaisCambio">

                            </div>
                            <div class="Correo">
                                <label for="email">* Correo Electrónico</label>
                                <input type="email" id="email" placeholder="tuemail@ejemplo.com" required/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Body;