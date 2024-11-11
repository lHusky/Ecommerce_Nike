import Carrito from "../components/Andre/Carrito/Carrito.jsx"
import Header from'../components/Diana/Header/Header.jsx'
import Navegador from'../components/Diana/Navegador/Navegador.jsx'
import PromoHeader from'../components/Diana/PromoHeader/PromoHeader.jsx'

const CarritoPage = () => {
    return(
        <body>
            <Header/>
            <Navegador/>
            <PromoHeader/> 
            <Carrito />
        </body>
    )
}

export default CarritoPage;