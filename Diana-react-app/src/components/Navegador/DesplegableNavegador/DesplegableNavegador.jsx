import React, { useState } from 'react';
import './DesplegableNavegador.css';
// import Logo from '../../assets/logo_nikes.png';

const DesplegableNavegador = () => {

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

export default DesplegableNavegador;


className="contenedor_menu" 
                    onMouseEnter={mouseDentro} /*Evento en React - cuando el cursor entra/sale del area de un elemento */ 
                    onMouseLeave={mouseFuera}> 
                    <a href="">Ayuda</a>
                            {MenuDesplegable}