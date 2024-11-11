import './ColumnaDesplegable.css';

const ColumnaDesplegable = (titulo,subtitulos) =>{
    
    return (
        <ul>
            <li><a href="#">{titulo}</a></li>
            
            <li><a href="#">{titulo}</a></li>
            {subtitulos.map((subtitulo, index) => (
                <li key={index}><a href="#">{subtitulo}</a></li>
            ))}
        </ul>
    )
}

export default ColumnaDesplegable;

{/* <li><a href="#">Hombre</a></li>
          <li><a href="#">Mujer</a></li>
          <li><a href="#">Niños</a></li>
          <li><a href="#">Accesorios</a></li>
          <li><a href="#">Descuentos</a></li> */}