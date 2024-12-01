import { useEffect, useState } from 'react';
import './VistaProducto.css';
import Carrusel from "../Carrusel/Carrusel.jsx"
import {productos_crs1} from "../Carrusel/CarruselInfo.jsx"

const VistaProducto = ({ id_producto }) => {

    const productoDefault = {
        id: 0,
        nombre: '',
        categoria: '',
        precio: '',
        tallas: [],
        etiquetas: [],
        descripcion: '',
        detalle: '',
        datos_producto: '',
        colorMuestra: '',
        estilo: '',
        imagenes: []
    }

    const [producto, setProducto] = useState(productoDefault);
    const [activoParaAgregar, setActivoParaAgregar] = useState(false);

    const obtenerProducto = async () => {
        await fetch(`http://localhost:4001/producto/${id_producto}`)
            .then(response => response.json())
            .then(data => setProducto(data))
    }

    useEffect(() => {
    
        obtenerProducto();
       
    }, []);

    const productosFiltrados = productos_crs1.filter(producto => producto.id !== Number(id_producto));
    
    return (
        <>
            <div className="vista-producto">
                {/* Imágenes de demostración */}
                <div className="producto-imagenes-demostracion">
                        {producto.imagenes?.map((imagen, index) => (
                            <a key={index} className="producto-imagen-link">
                                <img src={imagen} alt="Imagen de demostración" className="producto-imagen-demo" />
                            </a>
                        ))}
                    </div>
                <div className="producto-info">
                    <h2 className="producto-nombre">{producto.nombre}</h2>
                    <h6 className="producto-categoria">{producto.categoria}</h6>
                    <h5 className="producto-precio">{producto.precio}</h5>
                    
                    {/* Sección de imágenes */}
                    {/* <div className="producto-imagen-principal">
                        <img src={producto.imagenes[0]} alt={producto.nombre} />
                    </div> */}

                    {/* Sección de estilo */}
                    <div className="producto-estilo">
                        <img src={producto.imagenes[0]} alt="Estilo de producto" className="estilo-imagen" />
                    </div>

                    {/* Guía de tallas */}
                    <div className='Texto-Tallas'>
                        <p className="producto-talla-texto">Selecciona tu talla</p>
                        <a href="" className="producto-guia-tallas">Guía de tallas</a>
                    </div>
                    
                    

                    {/* Sección de tallas */}
                    <div className="producto-tallas">
                        {producto.tallas?.map((talla, index) => (
                            <button key={index} className="producto-boton-talla">
                                {talla}
                            </button>
                        ))}
                    </div>

                    {/* Botones de acciones */}
                    <div className="producto-botones">
                        <button className={!activoParaAgregar?"boton-agregar-desact" :"boton-agregar"}>Agregar al Carrito</button>
                        <button className="boton-favoritos">Favoritos ♡</button>
                    </div>

                    {/* Descripción y detalles */}
                    <p className="producto-descripcion">{producto.descripcion}</p>
                    <ul className="producto-detalles">
                        <li>{producto.colorMuestra}</li>
                        <li>Estilo: {producto.estilo}</li>
                    </ul>
                </div>
            </div>
            <div className='divcarrusel'>
                <div className='carrusel'> 
                    <Carrusel
                            titulo="También te puede interesar"
                            items={productosFiltrados}
                            imageWidth="438px"
                            imageHeight="438px"
                            fontSize="16px"
                            textAlignment="left"
                            TitlefontSize="20px"
                        
                        />
                </div>
            </div>
        </>
    );
}

export default VistaProducto;
