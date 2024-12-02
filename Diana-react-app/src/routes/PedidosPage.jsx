import React from "react";
import Navegacion from "../components/Romina/1. Navegacion/Navegacion.jsx";
import Pedidos from "../components/Romina/3. Pedidos/Pedidos.jsx";
import Header from '../components/Diana/Header/Header.jsx';
import Navegador from '../components/Diana/Navegador/Navegador.jsx';

const PedidosPage = () => {
    return (
        <div>
            <Header />
            <Navegador />
            <Navegacion />
            <Pedidos />
        </div>
    );
};

export default PedidosPage;
