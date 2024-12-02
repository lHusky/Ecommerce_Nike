import React from "react";
import Navegacion from "../components/Romina/1. Navegacion/Navegacion.jsx";
import Pedidos from "../components/Romina/3. Pedidos/Pedidos.jsx";
import Header from '../components/Diana/Header/Header.jsx';
import Navegador from '../components/Diana/Navegador/Navegador.jsx';
import Pie from'../components/Romina/Footer/PiePagina.jsx'

const PedidosPage = () => {
    return (
        <div>
            <Header />
            <Navegador />
            <Navegacion />
            <Pedidos />
            <Pie />
        </div>
    );
};

export default PedidosPage;
