import { useState } from 'react'

import './App.css'
import Header from'./components/Diana/Header/Header.jsx'
import Navegador from'./components/Diana/Navegador/Navegador.jsx'
import PromoHeader from'./components/Diana/PromoHeader/PromoHeader.jsx'
import Carrusel from'./components/Diana/Carrusel/Carrusel.jsx'

function App() {

  const productos_crs1 = [
    { image: '../../../../public/carrusel1/producto1_carrusel1.png', title: 'Nike V2K Run', description: 'Zapatillas para mujer',price:'S/ 599.90' },
    { image: '../../../../public/carrusel1/producto2_carrusel1.png', title: 'Nike V2K Run', description: 'Zapatillas para hombre',price:'S/ 569.90' },
    { image: '../../../../public/carrusel1/producto3_carrusel1.png', title: 'Nike Zoom Vomero 5', description: 'Zapatillas para mujer',price:'S/ 789.90' },
    { image: '../../../../public/carrusel1/producto4_carrusel1.png', title: 'Nike Zoom Vomero 5', description: 'Zapatillas para hombre',price:'S/ 749.90' },
    { image: '../../../../public/carrusel1/producto5_carrusel1.png', title: 'Nike Air Force 1 Dance', description: 'Zapatillas para mujer',price:'S/ 679.90' },
    { image: '../../../../public/carrusel1/producto6_carrusel1.png', title: 'Nike Cortez Leather', description:'Zapatillas para mujer',price:'S/ 399.90' },
    { image: '../../../../public/carrusel1/producto7_carrusel1.png', title: 'Nike Court Royale 2 Low', description:  'Zapatillas para hombre',price:'S/ 229.90' }
];

const productos_crs2 = [
  { image: '../../../../public/carrusel2/producto1_carrusel2.png', title: 'Nike Pegasus 41', description: '',price:'' },
  { image: '../../../../public/carrusel2/producto2_carrusel2.png', title: 'Prepárate para el verano', description: '',price:'' },
  { image: '../../../../public/carrusel2/producto3_carrusel2.png', title: 'Explora lo último de Jordan', description: '',price:'' },
  { image: '../../../../public/carrusel2/producto4_carrusel2.png', title: 'Lo mejor de Nike Fútbol', description: '',price:'' },
  { image: '../../../../public/carrusel2/producto4_carrusel2.png', title: 'Lo nuevo de Air Max', description: '',price:'' }
];

const productos_crs3 = [
  { image: '../../../../public/carrusel2/producto1_carrusel2.png', title: 'Nike Pegasus 41', description: '',price:'' },
  { image: '../../../../public/carrusel2/producto2_carrusel2.png', title: 'Prepárate para el verano', description: '',price:'' },
  { image: '../../../../public/carrusel2/producto3_carrusel2.png', title: 'Explora lo último de Jordan', description: '',price:'' },
  { image: '../../../../public/carrusel2/producto4_carrusel2.png', title: 'Lo mejor de Nike Fútbol', description: '',price:'' },
  { image: '../../../../public/carrusel2/producto4_carrusel2.png', title: 'Lo nuevo de Air Max', description: '',price:'' }
];

  return (
    <div>
     <Header/>
    <Navegador/>
    <PromoHeader/> 
    <div className='divisionprincipal'>
      <section>
        <article>
          <h3>¡Los favoritos del momento! ⚡ ¿Ya tienes el tuyo?</h3>
          <button className='bontones_sec1'></button>
          <button className='bontones_sec1_2'></button>
        </article> 
        <div className='carrusel1'> 
          <Carrusel
                items={productos_crs1}
                imageWidth="438px"
                imageHeight="438px"
                fontSize="16px"
                textAlignment="left"
                TitlefontSize="20px"
            />
          </div>

        <article>
        <h3>Novedades</h3>
          <button className='bontones_sec1'></button>
          <button className='bontones_sec1_2'></button>
        </article>
        <div className='carrusel2'> 
          <Carrusel
                items={productos_crs2}
                imageWidth="500px"
                imageHeight="500px"
                fontSize="16px"
                textAlignment="left"
                titleFontSize="23px"
                
            />
          </div>
        <article>
        <h3>Siempre Icónico</h3>
          <button className='bontones_sec2'></button>
          <button className='bontones_sec2_2'></button>
        </article>

        <article>
        <h3>Comprar por género</h3>
          <button disabled className='bontones_sec1'></button>
          <button className='bontones_sec1_2'></button>
        </article>
        
        <article>
          <button className='bontones_sec2'></button>
          <button className='bontones_sec2_2'></button>
        </article>
        
        <article>
          <h3>Nike Membership</h3>
        </article>
      </section>
      </div>
    </div>
  )
}

export default App
