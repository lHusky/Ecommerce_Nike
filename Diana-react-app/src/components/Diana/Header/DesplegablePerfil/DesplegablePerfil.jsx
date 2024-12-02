import './DesplegablePerfil.css'
import React from 'react';
import { Link } from 'react-router-dom';

const DesplegablePerfil = () => {

    // Función para cerrar sesión
    const cerrarSesion = () => {
        localStorage.removeItem('usuario');  // Elimina el usuario del localStorage
        window.location.href = '/iniciarSesion';  // Redirige al usuario a la página de iniciar sesión
    };

    return (
        <ul className="menu_desplegable">
            <li><Link to={`/PerfilPage/:id}`}>Perfil</Link></li>
            
            <li><Link to="/PedidosPage">Mis órdenes</Link></li>
            
            <li><Link to="/ConfiguracionPage">Configuración de cuenta</Link></li>
            
            <li><a href="/" onClick={cerrarSesion}>Cerrar sesión</a></li>
        </ul>
    )
}

export default DesplegablePerfil;
