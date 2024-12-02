import React, { useState } from 'react';
import Logo from '../../../assets/logo_nikes.png';
import Jump from '../../../assets/JumpLogoNike.png';
import Ver from '../../../assets/Ver.png';
import './IngresarContraseña.css';
import { useNavigate} from 'react-router-dom'; 

const IngresarContraseña = ({ email, password,RecuperarContraseña }) => {
  const [enteredPassword, setEnteredPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Usamos el hook para redirigir

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredPassword.trim() === password) {
      alert('Contraseña correcta, bienvenido!');
      navigate(`/`);  
    } else {
      setError('Contraseña incorrecta');
    }
  };
  
  const verContraseña = () => {
    setShowPassword((prev) => !prev);  
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
          <span className="Titulo">¿Cuál es tu contraseña?</span>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="Correo">
                <span className="Email"> {email} </span> 
              </div>
              <div className="Contraseña">
                <input
                  type={showPassword ? "text" : "password"}  // Cambia el tipo del input según el estado de showPassword
                  placeholder="* Contraseña"
                  required
                  value={enteredPassword}
                  onChange={(e) => setEnteredPassword(e.target.value)}  // Actualiza el estado de la contraseña
                />
                <button
                  type="button"
                  className="verContraseña"
                  onClick={verContraseña}  // Cambia la visibilidad de la contraseña al hacer clic
                >
                  <img src={Ver} alt="Ver Contraseña" />
                </button>
              </div>
              {error && <div style={{ color: 'red' }}>{error}</div>} {/* Mostrar el error si ocurre */}
              <button
                  type="button"
                  className="link"
                  onClick={() => RecuperarContraseña(email)}
                >
                  ¿Olvidaste tu contraseña?
                </button>
              <button type="submit" className="botonIniciarSesion">
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngresarContraseña;
