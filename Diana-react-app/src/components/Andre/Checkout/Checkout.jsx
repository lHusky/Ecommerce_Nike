import React from 'react';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/iniciarSesion');
  };

  const handleSignUp = () => {
    navigate('/');
  };

  const handleGuestCheckout = () => {
    navigate('/guest-checkout');
  };

  return (
    <div className="checkout-container">
      <h1>Choose How You Would Like To Check out</h1>
      <div className="checkout-options">
        {/* Member section */}
        <div className="member-section">
          <h2>Check out as a member and get free shipping on orders $50+</h2>
          <p>
            Use your NikePlus member login for Nike.com, NRC, NTC, SNKRS or the Nike app.
          </p>
          <button onClick={handleLogin} className="action-button">Iniciar Sesión</button>
          <button onClick={handleSignUp} className="action-button">Registrarse</button>
        </div>

        {/* Guest section */}
        <div className="guest-section">
          <h2>Continuar como invitado</h2>
          <p>
            You can create a free Nike Member Profile at any point during the checkout process.
          </p>
          <button onClick={handleGuestCheckout} className="action-button guest-button">
            Checkout Invitado
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;