import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Body from'./components/Body/Body.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Body/>
  </StrictMode>,
)



