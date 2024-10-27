import './Header.css'
import Logo from '../../assets/jordan.svg';
import DesplegableHeader from './DesplegableHeader/DesplegableHeader.jsx'
import React, { useState } from 'react';

const Header = () => {

    /*HOOK de estado de menu desplegable - se visualiza o no*/
    const [esVisible, setEsVisible] = useState(false);

    const mouseDentro = () => setEsVisible(true);
    const mouseFuera = () => setEsVisible(false);

    const MenuDesplegable = esVisible ? <DesplegableHeader /> : null;   /* Si esta */
    return (
        <header>
            <img src={Logo} alt="Logo Jordan" className='imagen_header'/>
            <ul>
                <li><a href="">Buscar&nbsp;tienda</a></li>
                <li className='divisionHeader'>|</li>
                <li
                    className="contenedor_menu" 
                    onMouseEnter={mouseDentro} /*Evento en React - cuando el cursor entra/sale del area de un elemento */ 
                    onMouseLeave={mouseFuera}> 
                    <a href="">Ayuda</a>
                            {MenuDesplegable}
                </li>
                <li className='divisionHeader'>|</li>
                <li><a href="">Únete</a></li>
                <li className='divisionHeader'>|</li>
                <li><a href="">Iniciar sesión</a></li>
            </ul>
        </header>
    )

}

export default Header;