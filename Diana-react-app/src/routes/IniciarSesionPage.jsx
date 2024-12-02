import IniciarSesion from "../components/Yerson/InicioSesion/InicioSesion.jsx"
import RegistroUsuario from "../components/Yerson/RegistroUsuario/RegistroUsuario.jsx";
import React,{useState} from 'react';

const IniciarSesionPage = () => {
    const [verRegistro, setVerRegistro] = useState(false);
    
    return (
        <div>
            {verRegistro ?
            <RegistroUsuario/>
            :<IniciarSesion
                NoExisteUser={setVerRegistro(true)}
            />
            }
        </div>
    )
    
}

export default IniciarSesionPage;