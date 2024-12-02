import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navegacion.css';

const Navegacion = () => {
  return (
    <nav className="perfil-nav-container">
      <ul className="perfil-nav">
        <li>
          <NavLink to="/" className="perfil-nav-link" activeClassName="active-link">
            Perfil
          </NavLink>
        </li>
        <li>
          <NavLink to="/pedidos" className="perfil-nav-link" activeClassName="active-link">
            Pedidos
          </NavLink>
        </li>
        <li>
          <NavLink to="/favoritos" className="perfil-nav-link" activeClassName="active-link">
            Favoritos
          </NavLink>
        </li>
        <li>
          <NavLink to="/configuracion" className="perfil-nav-link" activeClassName="active-link">
            Configuración
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navegacion;
