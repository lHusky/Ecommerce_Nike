// Carousel.js
import React from 'react';
import './Carrusel.css';

const Carousel = ({ 
    items, 
    imageWidth, 
    imageHeight, 
    fontSize = '16px', 
    fontColor="#959595",
    textAlignment = 'center', 
    titleFontSize = '16px', 
    // hoverEffect = false,     //sinEfecto por defecto
    titleColor = '#000000',  //negro por defecto
    titleFontWeight = '600'
}) => {
    return (
        <div className="carousel">
            {/* recorrer la lista de productos/categorias */}
            {items.map((item, index) => (
                <article 
                    key={index} 
                    className="carousel-objeto"
                >
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
                        </div>
                    }
                </article>
            ))}
        </div>
    );
};

export default Carousel;
