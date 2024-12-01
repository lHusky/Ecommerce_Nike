// Carousel.js
import React,{useState} from 'react';
import './Carrusel.css';

const Carousel = ({ 
    titulo,
    items, 
    imageWidth, 
    imageHeight, 
    fontSize = '16px', 
    fontColor="#959595",
    textAlignment = 'center', 
    titleFontSize = '16px', 
    siButton=true,
    titleColor = '#000000',  //negro por defecto
    titleFontWeight = '600',
    buttonPosition = 'fuera'  // o dentro
}) => {

    const [itemActual, setItemActual] = useState(0);
    const maxItem = items.length - 1;

    const handleSiguiente = () => {
        if (itemActual < maxItem) setItemActual(itemActual + 1);
    };

    const handleAnterior = () => {
        if (itemActual > 0) setItemActual(itemActual - 1);
    };
   
    return (
        <div className='divCarrousel'>
            {siButton?
            <div>
                {buttonPosition === 'fuera' ? (
                    <article>
                        <h3>{titulo}</h3>
                        <div className="outside-buttons">
                            <button onClick={handleAnterior} disabled={itemActual === 0} className='out-botonAnterior'></button>
                            <button onClick={handleSiguiente} disabled={itemActual === maxItem} className='out-botonPosterior'></button>
                        </div>
                    </article>
                ) : (
                    <div className="inside-buttons">
                        <button onClick={handleAnterior} className="left-arrow">◀</button>
                        <button onClick={handleSiguiente} className="right-arrow">▶</button>
                    </div>
                )}
            </div>:
            <h3>{titulo}</h3>}
            <div className="carousel">
                {/* recorrer la lista de productos/categorias */}
                {items.map((item, index) => (
                     <a 
                     key={index} 
                     href={`/PaginaProducto/${item.id}`} 
                     style={{
                         transform: `translateX(-${(itemActual) * 100}%)`, // Desplazamiento dinámico
                         transition: 'transform 0.5s ease-in-out', // Transición suave
                         display: 'inline-block', 
                     }}
                     className={`carousel-item ${index === itemActual ? 'active' : ''}`} // Agrega clases dinámicas si es necesario
                     >
                    <article 
                        key={index} 
                        className="carousel-objeto">
                        <img src={item.image} alt={item.title} className="carousel-imagen" style={{ width: imageWidth, height: imageHeight }}/>
                        
                        {(item.title!='' ||item.description!='' ||item.price!='') && 
                            <div className='division-texto'> 
                                <div className="carousel-texto" style={{ fontSize, textAlign: textAlignment }}>
                                    {item.title!='' &&<p style={{ fontSize: titleFontSize, color: titleColor, fontWeight: titleFontWeight}}>{item.title}</p>}
                                    {item.description!='' && <p style={{color:fontColor}}>{item.description}</p>}
                                </div>
                            
                                <div className='division-precio'>
                                    {item.price!=''  && <p>{item.price}</p>}
                                </div>
                            </div>}
                    </article>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
