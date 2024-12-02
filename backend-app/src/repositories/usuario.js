import model from '../models/usuario.js'

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

const findOneEmail = (Email) => {
    const result = productos.find(x => x.Email.toLowerCase() === Email.toLowerCase());
    return result;
};



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


const repository = { findAll, create, findOne,findOneEmail , update, remove }

export default repository;