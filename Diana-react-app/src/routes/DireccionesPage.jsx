import React from "react";
import Navegacion from "../components/Romina/1. Navegacion/Navegacion.jsx";
import Configuracion from "../components/Romina/4. Configuracion/Configuracion.jsx";
import Header from '../components/Diana/Header/Header.jsx';
import Navegador from '../components/Diana/Navegador/Navegador.jsx';
import Direcciones from '../components/Romina/4. Configuracion/DireccionesEntrega.jsx';

const ConfiguracionPedidosPage = () => {
    return (
        <div>
            <Header />
            <Navegador />
            <Navegacion />
            <Configuracion />
            <Direcciones />

        </div>
    );
};

export default ConfiguracionPedidosPage;
