import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CarritoPage from './routes/CarritoPage.jsx'
import CheckoutPage from './routes/CheckoutPage.jsx'
import IniciarSesionPage from './routes/IniciarSesionPage.jsx'
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
    path:"/iniciarSesion",
    element: <IniciarSesionPage/> //TAREA DE YERSON 
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)




