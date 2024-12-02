import { useEffect, useState } from 'react';
import './VistaProducto.css';
import Carrusel from "../Carrusel/Carrusel.jsx"
import {productos_crs1} from "../Carrusel/CarruselInfo.jsx"
import { useNavigate } from 'react-router-dom';

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

    const [tallaSeleccionada, setTallaSeleccionada] = useState(null); // Estado para talla seleccionada
    const [estiloSeleccionado, setEstiloSeleccionado] = useState(null); // Estado para estilo seleccionado
    const [producto, setProducto] = useState(productoDefault);
    const [TallasProducto, setTallasProducto] = useState([]);
    const [carrito, setCarrito] = useState(null);
    const [Stock, setStock] = useState(null);
    const [activoParaAgregar, setActivoParaAgregar] = useState(false);
    
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

    const agregarAlCarrito = async () => {

        const itemCarrito = {
            id: null,
            idCarrito: carrito.id, // El carrito relacionado al usuario
            idStock: Stock.id,
        };
        console.log(itemCarrito)
        const response = await fetch('http://localhost:4001/itemCarrito', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemCarrito)
        });

        if (response.ok) {
            console.log("Producto agregado al carrito correctamente");
            alert("Producto agregado al carrito");
        } else {
            console.error("Error al agregar el producto al carrito");
            alert("Hubo un problema al agregar el producto al carrito");
        }
        
    };

    const navigate = useNavigate();

    const obtenerCarrito = async () => {
        await fetch(`http://localhost:4001/carritoCompra/user/${usuarioGuardado.id}`)
            .then(response => response.json())
            .then(data => setCarrito(data))
            
    }

    const obtenerStock = async () => {
        console.log(id_producto,tallaSeleccionada);

        await fetch(`http://localhost:4001/stockProductos/producto-t/${id_producto}/talla/${tallaSeleccionada}`)
            .then(response => response.json())
            .then(data => setStock(data))
    }

    const obtenerProducto = async () => {
        await fetch(`http://localhost:4001/producto/${id_producto}`)
            .then(response => response.json())
            .then(data => setProducto(data))
    }
    const obtenerTallasProducto = async () => {
        await fetch(`http://localhost:4001/stockProductos/producto/${id_producto}`)
            .then(response => response.json())
            .then(data => {
                // Extraer las tallas del array de objetos y actualizar el estado
                const tallas = data.map(item => item.talla);
                setTallasProducto(tallas);
            });
    };

    useEffect(() => {
    
        obtenerProducto();
        obtenerTallasProducto();
    }, []);

    useEffect(() => {
        // Verifica si seleccion
        if (tallaSeleccionada) {
            setActivoParaAgregar(true);
            console.log(tallaSeleccionada);
        } else {
            setActivoParaAgregar(false);
        }
    }, [tallaSeleccionada]);


    const productosFiltrados = productos_crs1.filter(producto => producto.id !== Number(id_producto));
    
    return (
        <>
            <div className="vista-producto">
                {/* Imágenes de demostración */}
                <div className="producto-imagenes-demostracion">
                        {producto.imagenes?.map((imagen, index) => (
                            <a key={index} 
                            className={`producto-imagen-link ${estiloSeleccionado === imagen ? 'seleccionado' : ''}`}
                            // onClick={() => setEstiloSeleccionado(estilo)}
                            >
                                <img src={imagen} alt="Imagen de demostración" className="producto-imagen-demo" />
                            </a>
                        ))}
                    </div>
                <div className="producto-info">
                    <h2 className="producto-nombre">{producto.nombre}</h2>
                    <h6 className="producto-categoria">{producto.categoria}</h6>
                    <h5 className="producto-precio">S/. {producto.precio}</h5>
                    

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
                        {TallasProducto?.map((talla, index) => (
                           <button key={index} className={`producto-boton-talla ${tallaSeleccionada === talla ? 'seleccionado' : ''}`}
                           onClick={() => setTallaSeleccionada(talla)}>
                               {talla}
                           </button>
                        ))}
                    </div>

                    {/* Botones de acciones */}
                    <div className="producto-botones">
                    <button className={activoParaAgregar ? "boton-agregar" : "boton-agregar-desact"}
                        disabled={!activoParaAgregar}
                        onClick={async() => {
                            await obtenerStock();
                            await obtenerCarrito();
                            await agregarAlCarrito();
                        }}
                        >Agregar al Carrito</button>
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
