import './Carrito.css'
import foto1 from '../../../assets/foto1.png'
import foto2 from '../../../assets/foto2.jpg'
import foto3 from '../../../assets/foto3.png'
import { useEffect, useState } from 'react';
const Carrito = () => {
  const [carrito, setCarrito] = useState(null);
  const [itemscarrito, setitemsCarrito] = useState(null);
  const [Producto, setProducto] = useState(null);
  const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

  const obtenerCarrito = async () => {
    await fetch(`http://localhost:4001/carritoCompra/user/${usuarioGuardado.id}`)
        .then(response => response.json())
        .then(data => setCarrito(data))
        
  }

  const obtenerItemsCarrito = async () => {
    await fetch(`http://localhost:4001/carritoCompra/user/${carrito.id}`)
        .then(response => response.json())
        .then(data => setitemsCarrito(data))
        
  }
  const obtenerProducto = async (item) => {
    await fetch(`http://localhost:4001/producto/${item.id_producto}`)
        .then(response => response.json())
        .then(data => {
          const items = data.map(item => item);
          setProducto(items);
        });
          
  }
  const obtenerDatos = async ()=>{
    await itemscarrito.map((item, index) => obtenerProducto(item));
  }
  
useEffect(() => {
    
     obtenerCarrito();
     obtenerItemsCarrito();
    obtenerDatos();
    
}, []);

    return (
      <div className="carrito-container">
        <div className="header">
          <p>¡EXTENDIMOS! CYBER NIKE: HASTA 50% OFF 🔥</p>
          <p>Últimos días: Inicia sesión y obtén envíos GRATIS. Compra <a href="/">aquí</a>. <a href="/registro">Únete</a> o <a href="/iniciarSesion">Inicia Sesión</a></p>
        </div>
  
        <div className="carrito-content">
          <h2>Carrito de compras</h2>
          {Producto?
            <div>{Producto.map((item, index) => (
              <div>
                  <h5> {item.nombre}</h5>
                  <h6>{item.categoria}</h6>
                  <p>{item.precio}</p>
                </div>
                ))
            
                }</div>
          :<p>Su carrito de compras está vacío</p>}
  
          <div className="favoritos">
            <p>Favoritos</p>
            <p>¿Quieres ver tus favoritos? <a href="/registro">Únete</a> o <a href="/iniciarSesion">Inicia Sesión</a></p>
          </div>
  
          <div className="resumen">
            <p>Resumen</p>
            <label>¿Tienes un código promocional?</label>
            <p>Precio con IGV <span>S/ 0.00</span></p>
            <p>Envío <span>S/ 0.00</span></p>
            <p>IGV (18%) <span>S/ 0.00</span></p>
            <p>Total de la orden <span>S/ 0.00</span></p>
            <a className="comprar-btn" href="/checkout">Comprar</a>
          </div>
        </div>
  
        <div className="tambien-gustarte">
          <h3>También puede gustarte</h3>
          <div className="productos">
            <div className="producto">
              <img src={foto1} alt="Producto 1" />
            </div>
            <div className="producto">
              <img src={foto2} alt="Producto 2" />
            </div>
            <div className="producto">
              <img src={foto3} alt="Producto 3" />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Carrito;