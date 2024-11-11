import './Carrito.css'
const Carrito = () => {
    return (
      <div className="carrito-container">
        <div className="header">
          <p>¡EXTENDIMOS! CYBER NIKE: HASTA 50% OFF 🔥</p>
          <p>Últimos días: Inicia sesión y obtén envíos GRATIS. Compra <a href="#">aquí</a>. <a href="#">Únete</a> o <a href="#">Inicia Sesión</a></p>
        </div>
  
        <div className="carrito-content">
          <h2>Carrito de compras</h2>
          <p>Su carrito de compras está vacío</p>
  
          <div className="favoritos">
            <p>Favoritos</p>
            <p>¿Quieres ver tus favoritos? <a href="#">Únete</a> o <a href="#">Inicia Sesión</a></p>
          </div>
  
          <div className="resumen">
            <p>Resumen</p>
            <label>¿Tienes un código promocional?</label>
            <p>Precio con IGV <span>S/ 0.00</span></p>
            <p>Envío <span>S/ 0.00</span></p>
            <p>IGV (18%) <span>S/ 0.00</span></p>
            <p>Total de la orden <span>S/ 0.00</span></p>
            <button className="comprar-btn" disabled>Comprar</button>
          </div>
        </div>
  
        <div className="tambien-gustarte">
          <h3>También puede gustarte</h3>
          <div className="productos">
            <div className="producto">
              <img src="./assets/foto1.png" alt="Producto 1" />
            </div>
            <div className="producto">
              <img src="../assets/foto2.jpg" alt="Producto 2" />
            </div>
            <div className="producto">
              <img src="url-imagen-gorra" alt="Producto 3" />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Carrito;