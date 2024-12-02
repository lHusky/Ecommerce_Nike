import React from 'react';
import { Link } from 'react-router-dom';
import './Navegacion.css';

const Navegacion = () => {
  return (
    <nav className="nav-container">
      <ul>
        <li><Link to={`/PerfilPage/:id}`}>Perfil</Link></li>
        <li><Link to="/PedidosPage">Pedidos</Link></li>
        <li><Link to="/ConfiguracionPage">Configuración</Link></li>
      </ul>
    </nav>
  );
};

export default Navegacion;
