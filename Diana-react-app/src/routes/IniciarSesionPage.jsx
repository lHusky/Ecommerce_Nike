import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redireccionar entre rutas
import IniciarSesion from "../components/Yerson/InicioSesion/InicioSesion.jsx";
import RegistroUsuario from "../components/Yerson/RegistroUsuario/RegistroUsuario.jsx";
import IngresarContraseña from "../components/Yerson/IngresarContraseña/IngresarContraseña.jsx";

const IniciarSesionPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verRegistro, setVerRegistro] = useState(false); 
    const [verContraseña, setVerContraseña] = useState(false);

    const handleNoExisteUsuario = (emailInput) => {
        console.log("Redirigiendo a RegistroUsuario con email:", emailInput); 
        setVerContraseña(false); // Asegura que no haya conflicto
        setVerRegistro(true); // Activa el estado para RegistroUsuario
        setEmail(emailInput); // Actualiza el correo
    };

    const handleUsuarioExiste = (emailInput,passwordInput) => {
        console.log("Redirigiendo a IngresarContraseña con email:", emailInput); 
        setVerRegistro(false); // Asegura que no haya conflicto
        setVerContraseña(true); // Activa el estado para IngresarContraseña
        setEmail(emailInput); // Actualiza el correo
        setPassword(passwordInput);
    };

    return (
        <div>
            {verRegistro ? (
                <RegistroUsuario email={email} />
            ) : verContraseña ? (
                <IngresarContraseña email={email} password={password}/>
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
