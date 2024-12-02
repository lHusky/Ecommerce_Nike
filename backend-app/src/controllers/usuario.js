import repository from "../repositories/usuario.js";

const findAll = (req, res) => {
    const productos = repository.findAll();

    return res.status(200).json(productos);
}
const findOneEmail = (req,res) => {
    
    const Email = req.params.Email;

    const result = repository.findOneEmail(Email);

    return res.status(200).json(result);
}


const create = (req, res) => {
    const producto = req.body;
    const productoCreated = repository.create(producto);
    return res.status(201).json(productoCreated)
}

const findOne = (req,res) => {
    
    const id = req.params.id;

    const result = repository.findOne(id);

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

const controller = { findAll, create, findOne, update, remove,findOneEmail }

export default controller;