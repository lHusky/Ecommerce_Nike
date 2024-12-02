import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redireccionar entre rutas
import IniciarSesion from "../components/Yerson/InicioSesion/InicioSesion.jsx";
import RegistroUsuario from "../components/Yerson/RegistroUsuario/RegistroUsuario.jsx";
import IngresarContraseña from "../components/Yerson/IngresarContraseña/IngresarContraseña.jsx";

const IniciarSesionPage = () => {
    const[email,setEmail]=useState('');
    const [verRegistro, setVerRegistro] = useState(false); // Estado para mostrar registro
    const [verContraseña, setVerContraseña] = useState(false); // Estado para mostrar la página de contraseña
    const navigate = useNavigate(); // Hook para manejar redirecciones

    // Si el usuario no existe, cambia al formulario de registro
    const handleNoExisteUsuario = (Email) => {
        setEmail(Email)
        setVerRegistro(true);
    };

    // Si el usuario existe, cambia a la página de contraseña
    const handleUsuarioExiste = (Email) => {
        setEmail(Email)
        setVerContraseña(true);
    };

    // Redirige al dashboard después de iniciar sesión
    const handleInicioSesionCompleto = () => {
        navigate('/');
    };

    return (
        <div>
            {verRegistro ? (
                <RegistroUsuario />
            ) : verContraseña ? (
                <IngresarContraseña onLoginComplete={handleInicioSesionCompleto} />
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

