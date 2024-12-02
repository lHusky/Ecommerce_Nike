import React from "react";
import "./Contraseña.css";

const Contraseña = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="Contraseña-overlay">
      <div className="Contraseña-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Contraseña;
