import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import productoRouter from './src/routes/producto.js';   


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, resp) => {
    return resp.send('Hello World');
})

app.use('/producto', productoRouter);


app.listen(4001,() => {
    console.log('Server is running on port 4001');
})