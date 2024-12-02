import React from "react";
import Navegacion from "../components/Romina/1. Navegacion/Navegacion.jsx";
import Configuracion from "../components/Romina/4. Configuracion/Configuracion.jsx";
import Header from '../components/Diana/Header/Header.jsx';
import Navegador from '../components/Diana/Navegador/Navegador.jsx';
import Pie from'../components/Romina/Footer/PiePagina.jsx'

const ConfiguracionPedidosPage = () => {
    return (
        <div>
            <Header />
            <Navegador />
            <Navegacion />
            <Configuracion />
            <Pie />
        </div>
    );
};

export default ConfiguracionPedidosPage;
