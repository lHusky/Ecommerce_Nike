import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Header from './components/Navegador/Navegador.jsx'
import Header from'./components/Diana/Header/Header.jsx'
import Navegador from'./components/Diana/Navegador/Navegador.jsx'
import PromoHeader from'./components/Diana/PromoHeader/PromoHeader.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Navegador/>
    <PromoHeader/>
    <RouterProvider router={router}/>
  </StrictMode>,
)




