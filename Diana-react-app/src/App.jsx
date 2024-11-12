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
  { image: '../../../../public/carrusel3/producto1_carrusel3.png', title: 'Air Force 1', description: '',price:'' },
  { image: '../../../../public/carrusel3/producto2_carrusel3.png', title: 'Air Jordan', description: '',price:'' },
  { image: '../../../../public/carrusel3/producto3_carrusel3.png', title: 'Air Max', description: '',price:'' },
  { image: '../../../../public/carrusel3/producto4_carrusel3.png', title: 'Dunk', description: '',price:'' },
  { image: '../../../../public/carrusel3/producto5_carrusel3.png', title: 'Blazer', description: '',price:'' },
  { image: '../../../../public/carrusel3/producto6_carrusel3.png', title: 'Pegasus', description: '',price:'' }
];

const productos_crs4 = [
  { image: '../../../../public/carrusel4/producto1_carrusel4.jpg', title: '', description: '',price:'' },
  { image: '../../../../public/carrusel4/producto2_carrusel4.jpg', title: '', description: '',price:'' },
  { image: '../../../../public/carrusel4/producto3_carrusel4.png', title: '', description: '',price:'' }
  ];
const productos_crs5 = [
  { image: '../../../../public/carrusel5/producto1_carrusel5.png', title: 'Training', description: '',price:'' },
  { image: '../../../../public/carrusel5/producto2_carrusel5.png', title: 'Fútbol', description: '',price:'' },
  { image: '../../../../public/carrusel5/producto3_carrusel5.png', title: 'Tenis', description: '',price:'' },
  { image: '../../../../public/carrusel5/producto4_carrusel5.png', title: 'Skate', description: '',price:'' },
  { image: '../../../../public/carrusel5/producto5_carrusel5.png', title: 'Running', description: '',price:'' },
  { image: '../../../../public/carrusel5/producto6_carrusel5.png', title: 'Yoga', description: '',price:'' }
];

const productos_crs6 = [
  { image: '../../../../public/carrusel6/producto1_carrusel6.png', title: 'Training', description: '',price:'' },
  { image: '../../../../public/carrusel6/producto2_carrusel6.png', title: 'Fútbol', description: '',price:'' },
  { image: '../../../../public/carrusel6/producto3_carrusel6.png', title: 'Tenis', description: '',price:'' },
  { image: '../../../../public/carrusel6/producto4_carrusel6.png', title: 'Skate', description: '',price:'' },
  { image: '../../../../public/carrusel6/producto5_carrusel6.png', title: 'Running', description: '',price:'' }
];
  return (
    <div>
     <Header/>
    <Navegador/>
    <PromoHeader/> 
    <div className='divisionprincipal'>
      <section>
        <article className='artic'>
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

        <article className='artic'>
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
        <article className='artic'>
        <h3>Siempre Icónico</h3>
          <button className='bontones_sec2'></button>
          <button className='bontones_sec2_2'></button>
        </article>
        <div className='carrusel3'> 
          <Carrusel
                items={productos_crs3}
                imageWidth="250px"
                imageHeight="300px"
                fontSize="16px"
                textAlignment="left"
                titleFontSize="16px"
                
            />
          </div>
        <article className='artic'>
        <h3>Comprar por género</h3>
          <button className='bontones_sec1' disabled></button>
          <button className='bontones_sec1_2' disabled></button>
        </article>
        <div className='carrusel4'> 
          <Carrusel
                items={productos_crs4}
                imageWidth="465px"
                imageHeight="580px"
                fontSize="16px"
                textAlignment="left"
                titleFontSize="16px"
                
            />
          </div>
        <article className='artic'>
          <button className='bontones_sec2'></button>
          <button className='bontones_sec2_2'></button>
        </article>
        <div className='carrusel5'> 
          <Carrusel
                items={productos_crs5}
                imageWidth="250px"
                imageHeight="172px"
                fontSize="16px"
                textAlignment="left"
                TitlefontSize="20px"
            />
          </div>
        <article className='artic'>
          <h3>Nike Membership</h3>
        </article>
        <div className='carrusel6'> 
          <Carrusel
                items={productos_crs6}
                imageWidth="252px"
                imageHeight="260px"
                fontSize="16px"
                textAlignment="left"
                TitlefontSize="20px"
            />
          </div>
      </section>
      </div>
    </div>
  )
}

export default App
