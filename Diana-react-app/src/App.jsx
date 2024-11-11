import { useState } from 'react'

import './App.css'

function App() {

  return (
    <section>
      <article>
        <h3>¡Los favoritos del momento! ⚡ ¿Ya tienes el tuyo?</h3>
        <button className='bontones_sec1'></button>
        <button className='bontones_sec1_2'></button>
      </article>

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
  )
}

export default App
