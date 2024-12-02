import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redireccionar entre rutas
import IniciarSesion from "../components/Yerson/InicioSesion/InicioSesion.jsx";
import RegistroUsuario from "../components/Yerson/RegistroUsuario/RegistroUsuario.jsx";
import IngresarContraseña from "../components/Yerson/IngresarContraseña/IngresarContraseña.jsx";

const IniciarSesionPage = () => {
    const [email, setEmail] = useState('');
    const [verRegistro, setVerRegistro] = useState(false); 
    const [verContraseña, setVerContraseña] = useState(false);

    const handleNoExisteUsuario = (emailInput) => {
        console.log("Redirigiendo a RegistroUsuario con email:", emailInput); // Depuración
        setVerContraseña(false); // Asegura que no haya conflicto
        setVerRegistro(true); // Activa el estado para RegistroUsuario
        setEmail(emailInput); // Actualiza el correo
    };

    const handleUsuarioExiste = (emailInput) => {
        console.log("Redirigiendo a IngresarContraseña con email:", emailInput); // Depuración
        setVerRegistro(false); // Asegura que no haya conflicto
        setVerContraseña(true); // Activa el estado para IngresarContraseña
        setEmail(emailInput); // Actualiza el correo
    };

    return (
        <div>
            {verRegistro ? (
                <RegistroUsuario email={email} />
            ) : verContraseña ? (
                <IngresarContraseña email={email} />
            ) : (
                <IniciarSesion
                    NoExisteUser={handleNoExisteUsuario}
                    UsuarioExiste={handleUsuarioExiste}
                />
            )}
        </div>
    );
};


export default IniciarSesionPage;
