import { useState } from 'react'

import './App.css'
import Header from'./components/Diana/Header/Header.jsx'
import Navegador from'./components/Diana/Navegador/Navegador.jsx'
import PromoHeader from'./components/Diana/PromoHeader/PromoHeader.jsx'
import Carrusel from'./components/Diana/Carrusel/Carrusel.jsx'
import {productos_crs1,productos_crs2,productos_crs3,productos_crs4,productos_crs5,productos_crs6} from'./components/Diana/Carrusel/CarruselInfo.jsx'
function App() {
  return (
    <div>
     <Header/>
    <Navegador/>
    <PromoHeader/> 
    <div className='divisionprincipal'>
      <section>
        <div className='carrusel'> 
          <Carrusel
                items={productos_crs1}
                titulo="¡Los favoritos del momento! ⚡ ¿Ya tienes el tuyo?"
                imageWidth="438px"
                imageHeight="438px"
                fontSize="16px"
                textAlignment="left"
                TitlefontSize="20px"
            />
          </div>
        
       
        <div className='carrusel'> 
          <Carrusel
                items={productos_crs2}
                titulo="Novedades"
                imageWidth="500px"
                imageHeight="500px"
                fontSize="16px"
                textAlignment="left"
                titleFontSize="23px"
            />
          </div>
        <div className='carrusel'> 
          <Carrusel
                titulo="Siempre Icónico<"
                items={productos_crs3}
                imageWidth="250px"
                imageHeight="300px"
                fontSize="16px"
                textAlignment="left"
                titleFontSize="16px"
            />
          </div>

        <div className='carrusel'> 
          <Carrusel
                titulo="Comprar por género"
                items={productos_crs4}
                imageWidth="465px"
                imageHeight="580px"
                fontSize="16px"
                textAlignment="left"
                titleFontSize="16px"
                siButton={false}
            />
          </div>

        <div className='carrusel'> 
          <Carrusel
                items={productos_crs5}
                imageWidth="250px"
                imageHeight="172px"
                fontSize="16px"
                textAlignment="left"
                TitlefontSize="20px"
              
            />
          </div>

        <div className='carrusel_ult'> 
          <Carrusel
                items={productos_crs6}
                titulo="Nike Membership"
                imageWidth="252px"
                imageHeight="260px"
                fontSize="16px"
                textAlignment="left"
                TitlefontSize="20px"
                className='carruselcentrado'
                elementAlign="center"
                siButton={false}
            />
          </div>
      </section>
      </div>
    </div>
  )
}

export default App
