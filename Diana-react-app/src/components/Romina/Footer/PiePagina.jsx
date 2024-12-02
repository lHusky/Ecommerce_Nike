import React from 'react';
import './PiePagina.css';
import logo from "../../../assets/Pag_logo_nikes.png";  // Asegúrate de que la ruta sea correcta

const PiePagina = () => {
  return (
    <footer className="piepagina-container">
      <div className="piepagina-contenido">
        {/* Logo de Nike */}
        <div className="piepagina-logo">
          <img src={logo} alt="Nike Logo" />
        </div>

        {/* Enlaces */}
        <div className="piepagina-enlaces">
          <ul>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Empleo</a></li>
            <li><a href="#">Privacidad</a></li>
            <li><a href="#">Términos y condiciones</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="piepagina-siguenos">
          <span>Síguenos</span>
          <div className="redes-sociales">
            <a href="https://www.facebook.com/nike" className="facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com/Nike" className="twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com/nike/" className="instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.youtube.com/user/nike" className="youtube" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default PiePagina;
