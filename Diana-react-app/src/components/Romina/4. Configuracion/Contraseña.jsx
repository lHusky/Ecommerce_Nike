import React, { useState } from "react";
import "./Contraseña.css";

const Contraseña = ({ isOpen, onClose, usuarioId }) => {
  if (!isOpen) return null;

  const [nuevaContraseña, setNuevaContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [error, setError] = useState("");

  const handleNuevaContraseñaChange = (e) => {
    setNuevaContraseña(e.target.value);
  };

  const handleConfirmarContraseñaChange = (e) => {
    setConfirmarContraseña(e.target.value);
  };

  const handleGuardar = async () => {
    if (nuevaContraseña !== confirmarContraseña) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch(`http://localhost:4001/usuario/${usuarioId}/updatePassword`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nuevaContraseña }),
      });

      if (response.ok) {
        alert("Contraseña actualizada correctamente");
        onClose(); // Cierra el modal después de guardar
      } else {
        alert("Error al actualizar la contraseña");
      }
    } catch (error) {
      console.error("Error al actualizar la contraseña:", error);
    }
  };

  return (
    <div className="Contraseña-overlay">
      <div className="Contraseña-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h3>Cambiar Contraseña</h3>
        <div>
          <label>Nueva Contraseña</label>
          <input
            type="password"
            value={nuevaContraseña}
            onChange={handleNuevaContraseñaChange}
            placeholder="Ingrese su nueva contraseña"
          />
        </div>
        <div>
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            value={confirmarContraseña}
            onChange={handleConfirmarContraseñaChange}
            placeholder="Confirme su nueva contraseña"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleGuardar}>Guardar</button>
      </div>
    </div>
  );
};

export default Contraseña;