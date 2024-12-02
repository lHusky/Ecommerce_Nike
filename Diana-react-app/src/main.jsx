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
import ProductoPage from './routes/ProductoPage.jsx'
import IngresarContraseña from './components/Yerson/IngresarContraseña/IngresarContraseña.jsx'
import GraciasPage from './routes/GraciasPage.jsx'
import UsuarioCheckoutPage from './routes/UsuarioCheckoutPage.jsx'
import PerfilPage from './routes/PerfilPage.jsx'
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
    path:"/usuariocheckout",
    element: <UsuarioCheckoutPage/> //TAREA DE ANDRE 
  },
  {
    path:"/gracias",
    element: <GraciasPage/> //TAREA DE ANDRE 
  },
  {
    path:"/iniciarSesion",
    element: <IniciarSesionPage/> //TAREA DE YERSON 
  },
  {
    path:"/registro",
    element: <RegistrarsePage/> //TAREA DE YERSON 
  },
  {
    path:"/contraseña",
    element: <IngresarContraseña/> //TAREA DE YERSON 
  },

  {
    path: "/PaginaProducto/:id",  
    element: <ProductoPage/> 
  },

  {
    path: "/PerfilPage/:id",  
    element: <PerfilPage/> 
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ width: '100%', height: '100%' }}> {/* Forzar 100% */}
    <RouterProvider router={router}/>
    </div>
  
  </StrictMode>,
)
