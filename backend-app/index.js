import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import productoRouter from './src/routes/producto.js';   
import usuarioRouter from './src/routes/usuario.js';   
import itemCarritoRouter from './src/routes/itemCarrito.js';  
import carritoCompraRouter from './src/routes/carritoCompra.js';  
import stockProductosRouter from './src/routes/stockProductos.js';  

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, resp) => {
    return resp.send('Hello World');
})

app.use('/producto', productoRouter);

app.use('/usuario', usuarioRouter);

app.use('/itemCarrito', itemCarritoRouter);

app.use('/carritoCompra', carritoCompraRouter);

app.use('/stockProductos', stockProductosRouter);

app.listen(4001,() => {
    console.log('Server is running on port 4001');
})