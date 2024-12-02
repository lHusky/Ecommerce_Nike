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
            <li><a href="#">Experiencias</a></li>
            <li><a href="#">Mis órdenes</a></li>
            <li><a href="#">Favoritos</a></li>
            <li><a href="#">Configuración de cuenta</a></li>
            <li><a href="/" onClick={cerrarSesion}>Cerrar sesión</a></li>
        </ul>
    )
}

export default DesplegablePerfil;
