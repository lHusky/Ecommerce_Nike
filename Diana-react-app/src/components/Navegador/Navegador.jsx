import React, { useState } from 'react';
import './Navegador.css';
import Logo from '../../assets/jordan.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <img src={Logo} alt="Logo Jordan" className="imagen_header" />
      <ul>
        <li><a href="#">Buscar&nbsp;tienda</a></li>
        <li className="divisionHeader">|</li>

        <li 
          className="dropdown-container" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" >Ayuda</a>
          {isOpen && (
            <ul className="dropdown-menu">
              <li><a href="#">Estado del pedido</a></li>
              <li><a href="#">Políticas de envío</a></li>
              <li><a href="#">Devoluciones</a></li>
              <li><a href="#">Comunícate con nosotros</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Términos y Condiciones</a></li>
            </ul>
          )}
        </li>

        <li className="divisionHeader">|</li>
        <li><a href="#">Únete</a></li>
        <li className="divisionHeader">|</li>
        <li><a href="#">Iniciar sesión</a></li>
      </ul>
    </header>
  );
};

export default Header;
