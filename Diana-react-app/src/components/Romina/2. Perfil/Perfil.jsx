import React, { useEffect, useState } from "react";
import "./Perfil.css";
import acceso from "../../../assets/carrusel-acceso.jpg";
import entrenamiento from "../../../assets/carrusel-entrenamiento.jpg";
import enviogratis from "../../../assets/carrusel-enviogratis.jpg";
import exclusivo from "../../../assets/carrusel-productoexclusivo.jpg";

const Perfil = () => {
  const [usuario, setUsuario] = useState(null);

  // Al cargar el componente, recuperamos el usuario del localStorage
  useEffect(() => {
    const usuarioData = localStorage.getItem("usuario");
    if (usuarioData) {
      setUsuario(JSON.parse(usuarioData)); // Convertimos el JSON a un objeto
    }
  }, []);

  // Si el usuario aún no está cargado, mostramos un mensaje de carga
  if (!usuario) {
    return <div>Cargando...</div>;
  }

  const benefits = [
    {
      image: enviogratis,
      title: "Envío gratis",
    },
    {
      image: exclusivo,
      title: "Producto exclusivo",
    },
    {
      image: entrenamiento,
      title: "Apps de running y entrenamiento gratuitas",
    },
    {
      image: acceso,
      title: "Acceso anticipado",
    },
  ];

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <h1>{usuario.Nombre} {usuario.Apellido}</h1>
        <p>Miembro de Nike desde 2024</p>
      </div>
      <div className="perfil-benefits">
        <h2>Beneficios</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <img
                src={benefit.image}
                alt={benefit.title}
                className="benefit-image"
              />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="favorites-section">
        <h2>Favoritos</h2>
        <a href="#">Ver todos</a>
        <div className="favorites-grid">
          {/* Aquí podrías mapear tus productos favoritos */}
        </div>
      </div>
    </div>
  );
};

export default Perfil;
