import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Header from '../../Diana-react-app/src/components/Header/Header.jsx';
import Navegador from '../../Diana-react-app/src/components/Navegador/Navegador.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Navegador/>
    <App />
  </StrictMode>,
)
