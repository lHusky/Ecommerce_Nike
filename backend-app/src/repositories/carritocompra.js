import model from '../models/carritocompra.js'

let carritocompras = [...model];

const findAll = () => {
    return carritocompras;
}

const create = (carritocompra) => {
    carritocompras.push(carritocompra);
    return carritocompra;
}

const findOne = (id) => {
    const result = carritocompras.find(x => x.id == id);
    return result;
}

const update = (carritocompra) => {
    const index = carritocompras.findIndex(item => item.id == carritocompra.id);
    if (index > -1) {
        carritocompras[index] = carritocompra;
        return true;
    }
    else 
        return false   
}

const remove = (id) => {
    const index = carritocompras.findIndex(item => item.id == id);
    if (index > -1) {
        carritocompras.splice(index,1);
        return true;
    }
    else   
        return false;
} 

const repository = { findAll, create, findOne, update, remove }
export default repository;