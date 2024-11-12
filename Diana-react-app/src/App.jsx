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
