import React, { useState, useEffect } from 'react';
import './Configuracion.css';
import Preferencias from './Preferencias';  // Importa el componente Preferencias
import { useParams } from 'react-router-dom';  // Usamos useParams para obtener el id desde la URL

const Configuracion = () => {
  const { id } = useParams();  // Obtener el id de la URL
  const [usuario, setUsuario] = useState(null);  // Estado para almacenar los datos del usuario
  const [isSaved, setIsSaved] = useState(false);  // Estado para manejar el cambio de color en el botón
  const [activeSection, setActiveSection] = useState('detalles');  // Controlar la sección activa

  // Al cargar el componente, obtenemos el usuario desde localStorage
  useEffect(() => {
    const usuarioData = localStorage.getItem('usuario');
    if (usuarioData) {
      setUsuario(JSON.parse(usuarioData));  // Convertimos el JSON a un objeto y lo almacenamos en el estado
    }
  }, []);

  // Si el usuario no está cargado, mostramos el mensaje de "Cargando..."
  if (!usuario) {
    return <div>Cargando...</div>;
  }

  // Función para manejar los cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  // Función para guardar los cambios (actualiza el backend)
  const handleGuardar = async () => {
    try {
      const response = await fetch(`/api/usuario/update/${id}`, {  // Usamos el id para actualizar los datos
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      if (response.ok) {
        setIsSaved(true); // Cambiar color del botón cuando se guarda correctamente
        setTimeout(() => setIsSaved(false), 2000); // Vuelve al color original después de 2 segundos
      } else {
        alert('Error al guardar los cambios');
      }
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  };

  // Función para cambiar entre las secciones
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  // Función para guardar las preferencias
  const handleSavePreferences = (preferencias) => {
    const updatedUsuario = { ...usuario, ...preferencias };
    setUsuario(updatedUsuario);  // Actualiza el estado con las nuevas preferencias
    alert('Preferencias guardadas');
  };

  return (
    <div className="configuracion">
      {/* Menú lateral */}
      <aside className="menu-lateral">
        <ul>
          <li
            className={activeSection === 'detalles' ? 'activo' : ''}
            onClick={() => handleSectionChange('detalles')}
          >
            Detalles de la cuenta
          </li>
          <li
            className={activeSection === 'direcciones' ? 'activo' : ''}
            onClick={() => handleSectionChange('direcciones')}
          >
            Direcciones de entrega
          </li>
          <li
            className={activeSection === 'preferencias' ? 'activo' : ''}
            onClick={() => handleSectionChange('preferencias')}
          >
            Preferencias de comunicación
          </li>
        </ul>
      </aside>

      {/* Contenido principal */}
      <main className="contenido-principal">
        <h2>{activeSection === 'detalles' ? 'Detalles de la cuenta' : activeSection === 'direcciones' ? 'Direcciones de entrega' : 'Preferencias de comunicación'}</h2>

        {/* Detalles de la cuenta */}
        {activeSection === 'detalles' && (
          <>
            <div className="detalle-configuracion">
              <label>* Nombre</label>
              <input
                type="text"
                name="nombre"
                value={usuario.nombre}
                onChange={handleInputChange}
              />
            </div>
            <div className="detalle-configuracion">
              <label>* Apellido</label>
              <input
                type="text"
                name="apellido"
                value={usuario.apellido}
                onChange={handleInputChange}
              />
            </div>
            <div className="detalle-configuracion">
              <label>* Correo electrónico</label>
              <input
                type="email"
                name="correo"
                value={usuario.correo}
                onChange={handleInputChange}
              />
            </div>
            {/* Otros campos de detalles */}
            <button 
              className={`guardar-boton ${isSaved ? 'guardado' : ''}`} 
              onClick={handleGuardar}
            >
              Guardar
            </button>
          </>
        )}

        {/* Direcciones de entrega */}
        {activeSection === 'direcciones' && (
          <div>
            <p>Aquí van tus direcciones de entrega.</p>
          </div>
        )}

        {/* Preferencias de comunicación */}
        {activeSection === 'preferencias' && (
          <Preferencias
            usuario={usuario}
            onSavePreferences={handleSavePreferences}
          />
        )}
      </main>
    </div>
  );
};

export default Configuracion;
