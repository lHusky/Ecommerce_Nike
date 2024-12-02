import './Header.css'
import Logo from '../../../assets/jordan.svg';
import DesplegableHeader from './DesplegableHeader/DesplegableHeader.jsx'
import DesplegablePerfil from './DesplegablePerfil/DesplegablePerfil.jsx'
import React, { useState, useEffect } from 'react';

const Header = () => {
    // Estados para controlar la visibilidad de los menús
    const [esVisibleAyuda, setEsVisibleAyuda] = useState(false);
    const [esVisiblePerfil, setEsVisiblePerfil] = useState(false);
    const [usuario, setUsuario] = useState(null);

    // Funciones para manejar la visibilidad de los menús
    const mouseDentroAyuda = () => setEsVisibleAyuda(true);
    const mouseFueraAyuda = () => setEsVisibleAyuda(false);

    const mouseDentroPerfil = () => setEsVisiblePerfil(true);
    const mouseFueraPerfil = () => setEsVisiblePerfil(false);

    // Lógica para cargar los datos del usuario desde localStorage
    useEffect(() => {
        const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
        if (usuarioGuardado) {
            setUsuario(usuarioGuardado);  // Guarda el usuario en el estado
        }
    }, []);

    // Menú desplegable para "Ayuda"
    const MenuDesplegableAyuda = esVisibleAyuda ? <DesplegableHeader /> : null;
    
    // Menú desplegable para "Perfil"
    const MenuDesplegablePerfil = esVisiblePerfil ? <DesplegablePerfil /> : null;

    return (
        <header>
            <img src={Logo} alt="Logo Jordan" className='imagen_header'/>
            <ul>
                <li><a href="">Buscar&nbsp;tienda</a></li>
                <li className='divisionHeader'>|</li>
                
                {/* Menú de Ayuda */}
                <li
                    className="contenedor_menu"
                    onMouseEnter={mouseDentroAyuda} 
                    onMouseLeave={mouseFueraAyuda}>
                    <a href="">Ayuda</a>
                    {MenuDesplegableAyuda}  {/* Mostrar el menú de ayuda solo si esVisibleAyuda es true */}
                </li>

                <li className='divisionHeader'>|</li>
                
                {/* Si el usuario está logueado, muestra su nombre en el enlace a Perfil */}
                {usuario ? (
                    <>
                        <li
                            className="contenedor_menu"
                            onMouseEnter={mouseDentroPerfil} 
                            onMouseLeave={mouseFueraPerfil}>
                            <a href="">{usuario.Nombre} {usuario.Apellido}</a>
                            {MenuDesplegablePerfil}  {/* Mostrar el menú de perfil solo si esVisiblePerfil es true */}
                        </li>
                    </>
                ) : (
                    <>
                        {/* Si el usuario no está logueado, muestra los enlaces de "Iniciar sesión" y "Únete" */}
                        <li><a href="">Únete</a></li>
                        <li className='divisionHeader'>|</li>
                        <li><a href="/iniciarSesion">Iniciar sesión</a></li>
                    </>
                )}
            </ul>
        </header>
    );
}

export default Header;
