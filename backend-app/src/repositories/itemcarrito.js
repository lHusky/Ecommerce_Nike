import model from '../models/itemcarrito.js'

let itemcarritos = [...model];

const findAll = () => {
    return itemcarritos;
}

const create = (itemcarrito) => {
    itemcarritos.push(itemcarrito);
    return itemcarrito;
}

const findOne = (id) => {
    const result = itemcarritos.find(x => x.id == id);
    return result;
}
const findOneByCarrito = (id) => {
    const result = itemcarritos.filter(x => x.idCarrito == id);
    return result;
}

const update = (itemcarrito) => {
    const index = itemcarritos.findIndex(item => item.id == itemcarrito.id);
    if (index > -1) {
        itemcarritos[index] = itemcarrito;
        return true;
    }
    else 
        return false   
}

const remove = (id) => {
    const index = itemcarritos.findIndex(item => item.id == id);
    if (index > -1) {
        itemcarritos.splice(index,1);
        return true;
    }
    else   
        return false;
} 

const repository = { findAll, create, findOne,findOneByCarrito, update, remove }
export default repository;