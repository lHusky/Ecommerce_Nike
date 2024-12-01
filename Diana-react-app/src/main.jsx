import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CarritoPage from './routes/CarritoPage.jsx'
import CheckoutPage from './routes/CheckoutPage.jsx'
import IniciarSesionPage from './routes/IniciarSesionPage.jsx'
import RegistrarsePage from './routes/RegistrarsePage.jsx'
import GuestCheckoutPage from './routes/guestCheckoutPage.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/carrito",
    element: <CarritoPage/>
  },
  {
    path:"/checkout",
    element: <CheckoutPage/> //TAREA DE ANDRE 
  },
  {
    path:"/guest-checkout",
    element: <GuestCheckoutPage/> //TAREA DE ANDRE 
  },
  {
    path:"/iniciarSesion",
    element: <RegistrarsePage/> //TAREA DE YERSON 
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ width: '100%', height: '100%' }}> {/* Forzar 100% */}
    <RouterProvider router={router}/>
    </div>
  
  </StrictMode>,
)




