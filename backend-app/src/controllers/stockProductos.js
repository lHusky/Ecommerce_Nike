import repository from "../repositories/stockProductos.js";

const findAll = (req, res) => {
    const productos = repository.findAll();

    return res.status(200).json(productos);
}

const create = (req, res) => {
    const producto = req.body;
    const stocks = repository.findAll();
    const newId = stocks.length > 0 ? stocks[stocks.length - 1].id + 1 : 1;
    producto.id = newId;
    
    const productoCreated = repository.create(producto);
    return res.status(201).json(productoCreated)
}

const findOne = (req,res) => {
    
    const id = req.params.id;

    const result = repository.findOne(id);

    return res.status(200).json(result);
}

const findOneByProducto = (req,res) => {
    
    const id = req.params.id;

    const result = repository.findOneByProducto(id);

    return res.status(200).json(result);
}
const findOneByProductoTalla = (req,res) => {
    
    const id = req.params.id;
    const talla = req.params.talla;
    
    const result = repository.findOneByProductoTalla(id,talla);

    return res.status(200).json(result);
}

const update = (req, res) => {
    const producto = req.body;
    const result = repository.update(producto);

    return res.status(200).json(result)
}

const remove = (req, res) => {
    const id = req.params.id;

    const result = repository.remove(id);

    return res.status(200).json(result);
}

const controller = { findAll, create, findOne,findOneByProducto,findOneByProductoTalla, update, remove }

export default controller;