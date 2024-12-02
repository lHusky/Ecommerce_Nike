import React, { useState, useEffect } from 'react';
import Logo from '../../../assets/logo_nikes.png';
import Jump from '../../../assets/JumpLogoNike.png';
import Reenviar from '../../../assets/Reenviar.png';
import Ver from '../../../assets/Ver.png';
import './RecuperarContraseña.css';
import { useNavigate } from 'react-router-dom';

const RecuperarContraseña = ({ email }) => {
    const navigate = useNavigate();
    const [isCodeSent, setIsCodeSent] = useState(false); // Controla si el código fue enviado
    const [showPassword, setShowPassword] = useState(false); // Controla si la contraseña es visible
    const [codigoIngresado, setCodigoIngresado] = useState(""); // Para almacenar el código ingresado
    const [nuevaContraseña, setNuevaContraseña] = useState(""); // Para almacenar la nueva contraseña

    // Función para enviar el código
    const sendCode = async () => {
        console.log("Intentando enviar código...");
        try {
            const response = await fetch("http://localhost:4001/usuario/send-code", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error del servidor:", errorData);
                alert(errorData.message || "Error al enviar código.");
                return;
            }

            const data = await response.json();
            alert(data.message || "Código enviado con éxito.");
        } catch (error) {
            console.error("Error enviando código:", error);
            alert("No se pudo enviar el código. Inténtalo de nuevo más tarde.");
        }
    };

    // Llama a sendCode automáticamente al cargar la página una sola vez
    useEffect(() => {
        if (!isCodeSent) {
            sendCode();
            setIsCodeSent(true); // Marca que el código ya fue enviado
        }
    }, [isCodeSent, email]);

    // Manejo del envío del formulario
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Verificar el código ingresado
        if (!codigoIngresado) {
            alert("Por favor ingresa el código que te enviamos.");
            return;
        }

        try {
            const verifyResponse = await fetch("http://localhost:4001/usuario/verify-code", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, code: codigoIngresado }),
            });

            if (!verifyResponse.ok) {
                const verifyError = await verifyResponse.json();
                alert(verifyError.message || "El código ingresado es incorrecto o expiró.");
                return; // No continuar si el código no es válido
            }

            // Verificar que la nueva contraseña es válida
            if (!nuevaContraseña || nuevaContraseña.length < 8) {
                alert("La nueva contraseña debe tener al menos 8 caracteres.");
                return;
            }

            // Actualizar la contraseña del usuario en el backend
            const updateResponse = await fetch(`http://localhost:4001/usuario/${email}/updatePassword`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nuevaContraseña }),
            });

            if (!updateResponse.ok) {
                const updateError = await updateResponse.json();
                alert(updateError.message || "Error al actualizar la contraseña.");
                return;
            }

            alert("Contraseña actualizada correctamente.");
            navigate("/iniciarSesion"); // Redirigir al inicio de sesión
        } catch (error) {
            console.error("Error durante la actualización:", error);
            alert("No se pudo completar la actualización. Inténtalo más tarde.");
        }
    };

    // Función para manejar el botón "Cancelar" y volver a la página anterior
    const handleCancelar = () => {
        navigate(-1); // Volver a la página anterior en el historial
    };

    return (
        <div className="parte1">
            <div className="parte2">
                <div className="parte3">
                    <div className="parte4">
                        <a href="https://www.nike.com.pe/home" className="imagen1">
                            <img src={Logo} alt="Logo" />
                        </a>
                        <a href="https://www.nike.com.pe/home" className="imagen2">
                            <img src={Jump} alt="Logo Jump" />
                        </a>
                    </div>
                    <span className="Titulo">Recuperar tu contraseña</span>
                    <div>
                        <form onSubmit={handleFormSubmit}>
                            <div>
                                <span className="mensag-codigo">Te enviamos un código a</span>
                            </div>
                            <div className="Correo">
                                <span className="Email">{email}</span>
                                <a className="link" href="/iniciarSesion">Editar</a>
                            </div>
                            <div className="Codigo">
                                <input 
                                    type="text" 
                                    placeholder="* Código" 
                                    required 
                                    value={codigoIngresado}
                                    onChange={(e) => setCodigoIngresado(e.target.value)} 
                                />
                                <button type="button" onClick={sendCode} className="ReenviarCodigo">
                                    <img src={Reenviar} alt="Logo Reenviar" />
                                </button>
                                <div className="resend-msg">Reenviar código en <span id="contador">30</span> s</div>
                            </div>
                            <div className="Contraseña">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="* Nueva Contraseña" 
                                    required 
                                    value={nuevaContraseña}
                                    onChange={(e) => setNuevaContraseña(e.target.value)} 
                                />
                                <button 
                                    type="button" 
                                    className="verContraseña" 
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <img src={Ver} alt="Ver Contraseña" />
                                </button>
                            </div>
                            <div className="condiciones">
                                <div className="condicion condicion1">
                                    ✘ <span>Mínimo de 8 caracteres</span>
                                </div>
                                <div className="condicion condicion2">
                                    ✘ <span>Mayúsculas, minúsculas y un número</span>
                                </div>
                            </div>
                            <div className="botones">
                            <button onClick={handleCancelar} className="cancelar-btn">Cancelar</button>
                                <button
                                    type="submit"
                                    className="botonContinuar"
                                >
                                    Continuar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecuperarContraseña;
