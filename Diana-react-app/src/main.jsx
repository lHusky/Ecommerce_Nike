import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Header from './components/Navegador/Navegador.jsx'
import Header from'./components/Header/Header.jsx'
import Navegador from'./components/Navegador/Navegador.jsx'
import PromoHeader from'./components/PromoHeader/PromoHeader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Navegador/>
    <PromoHeader/>
  </StrictMode>,
)
