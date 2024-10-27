import React, { useState } from 'react';
import './Navegador.css';
import Logo from '../../assets/logo_nikes.png';

const Navegador = () => {

  return (
    <nav>
        <img src={Logo} alt="Logo Nike" className='imagen_navegador'/>
        <ul>
          <li><a href="#">Lo nuevo</a></li>
          <li><a href="#">Hombre</a></li>
          <li><a href="#">Mujer</a></li>
          <li><a href="#">Niños</a></li>
          <li><a href="#">Accesorios</a></li>
          <li><a href="#">Descuentos</a></li>
        </ul>
    </nav>
  );
};

export default Navegador;
