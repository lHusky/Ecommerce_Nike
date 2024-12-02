import React, { useState } from 'react';
import IniciarSesion from "../components/Yerson/InicioSesion/InicioSesion.jsx";
import RegistroUsuario from "../components/Yerson/RegistroUsuario/RegistroUsuario.jsx";
import IngresarContraseña from "../components/Yerson/IngresarContraseña/IngresarContraseña.jsx";
import RecuperarContraseña from "../components/Yerson/RecuperarContraseña/RecuperarContraseña.jsx"; // Asegúrate de importar este componente

const IniciarSesionPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verRegistro, setVerRegistro] = useState(false); 
    const [verContraseña, setVerContraseña] = useState(false);
    const [verRecuperarContraseña, setVerRecuperarContraseña] = useState(false);

    const handleNoExisteUsuario = (emailInput) => {
        console.log("Redirigiendo a RegistroUsuario con email:", emailInput); 
        setVerContraseña(false); // Asegura que no haya conflicto
        setVerRegistro(true); // Activa el estado para RegistroUsuario
        setEmail(emailInput); // Actualiza el correo
    };

    const handleUsuarioExiste = (emailInput, passwordInput) => {
        console.log("Redirigiendo a IngresarContraseña con email:", emailInput); 
        setVerRegistro(false); // Asegura que no haya conflicto
        setVerContraseña(true); // Activa el estado para IngresarContraseña
        setEmail(emailInput); // Actualiza el correo
        setPassword(passwordInput);
    };

    const handleRecuperarContraseña = (emailInput) => {
        console.log("Redirigiendo a RecuperarContraseña con email:", emailInput);
        setVerRecuperarContraseña(true); // Activa RecuperarContraseña
        setVerRegistro(false); // Desactiva RegistroUsuario
        setVerContraseña(false); // Desactiva IngresarContraseña
        setEmail(emailInput); // Actualiza el email
    };
    
    return (
        <div>
            {verRecuperarContraseña ? (
                <RecuperarContraseña email={email} />
            ) : verRegistro ? (
                <RegistroUsuario email={email} />
            ) : verContraseña ? (
                <IngresarContraseña 
                    email={email} 
                    password={password} 
                    RecuperarContraseña={handleRecuperarContraseña} // Pasa la función como prop
                />
            ) : (
                <IniciarSesion
                    NoExisteUser={handleNoExisteUsuario}
                    UsuarioExiste={handleUsuarioExiste}
                    RecuperarContraseña={handleRecuperarContraseña} 
                />
            )}
        </div>
    );
}

export default IniciarSesionPage;
