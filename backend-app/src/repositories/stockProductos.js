import model from '../models/StockProductos.js'

let productos = [...model];

const findAll = () => {
    return productos;
}

const create = (producto) => {
    productos.push(producto);
    
    return producto;
}

const findOne = (id) => {
    const result = productos.find(x => x.id == id);

    return result;
}

const findOneByProducto = (id) => {
    const result = productos.filter(x => x.id_producto == id);

    return result;
}

const findOneByProductoTalla = (id,talla) => {
    const result = productos.find(x => x.id_producto == id && x.talla ==talla);

    return result;
}

const update = (producto) => {
    const index = productos.findIndex(item => item.id == producto.id);

    if (index > -1) {
        productos[index] = producto;
        return true;
    }
    else 
        return false   
}

const remove = (id) => {
    const index = productos.findIndex(item => item.id == id);

    if (index > -1) {
        productos.splice(index,1);
        return true;
    }
    else   
        return false;
} 

const repository = { findAll, create, findOne,findOneByProducto,findOneByProductoTalla, update, remove }

export default repository;