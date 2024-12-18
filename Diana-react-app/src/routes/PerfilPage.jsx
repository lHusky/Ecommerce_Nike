import React from "react";
import Navegacion from "../components/Romina/1. Navegacion/Navegacion.jsx";
import Perfil from "../components/Romina/2. Perfil/Perfil.jsx";
import Header from'../components/Diana/Header/Header.jsx'
import Navegador from'../components/Diana/Navegador/Navegador.jsx'
import Pie from'../components/Romina/Footer/PiePagina.jsx'

const PerfilPage = () => {
    return (
        <div>
            <Header/>
            <Navegador/>
            <Navegacion />
            <Perfil />
            <Pie />
        </div>
    );
};

export default PerfilPage;
