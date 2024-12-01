import Header from'../components/Diana/Header/Header.jsx'
import Navegador from'../components/Diana/Navegador/Navegador.jsx'
import PromoHeader from'../components/Diana/PromoHeader/PromoHeader.jsx'
import VistaProducto from "../components/Diana/VistaProducto/VistaProducto.jsx"
import { useParams } from 'react-router-dom';  



const ProductoPage = () => {

    const { id } = useParams(); 
    return(
        <div>
            <Header/>
            <Navegador/>
            <PromoHeader/> 
            <VistaProducto id_producto={id}/>
        </div>
    )
}

export default ProductoPage;