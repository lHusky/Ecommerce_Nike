import React, { useState } from 'react';
import './Navegador.css';
import Logo from '../../assets/logo_nikes.png';

const Navegador = () => {
   /*HOOK de estado de menu desplegable - se visualiza o no*/
   const [esVisible, setEsVisible] = useState(false);

  const mouseDentro = () => setEsVisible(true);
  const mouseFuera = () => setEsVisible(false);

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
        <div className='contenedorBuscador'>
          <button type="submitt" className="lupa" id="" />
          <input type="text" className="buscador" placeholder="Buscar" />
        </div>
    </nav>
  );
};

export default Navegador;
