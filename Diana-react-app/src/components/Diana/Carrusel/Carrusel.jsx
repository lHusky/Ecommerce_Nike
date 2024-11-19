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
    titleFontWeight = '600',
    elementAlign="flex-start"
}) => {



    const handleProductClick = async (id) => {
        try {
            const response = await fetch(`https://192.168.18.10:4001/producto/${id}`); // Cambia la URL por la tuya
            const data = await response.json();
            console.log('Producto seleccionado:', data);
            // Aquí puedes mostrar los datos en un modal o realizar otra acción
        } catch (error) {
            console.error('Error al obtener los detalles del producto:', error);
        }
    };

    return (
        <div className="carousel">
            {/* recorrer la lista de productos/categorias */}
            {items.map((item, index) => (
                <a href='#'>
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
                        </div>
                    }
                </article>
                </a>
            ))}
        </div>
    );
};

export default Carousel;
