import React from 'react';
import { Link } from 'react-router-dom';
import './Navegacion.css';

const Navegacion = () => {
  return (
    <nav className="nav-container">
      <ul>
        <li><Link to="/perfil">Perfil</Link></li>
        <li><Link to="/pedidos">Pedidos</Link></li>
        <li><Link to="/configuracion">Configuración</Link></li>
      </ul>
    </nav>
  );
};

export default Navegacion;
