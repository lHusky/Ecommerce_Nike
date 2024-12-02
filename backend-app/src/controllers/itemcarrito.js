import repository from "../repositories/itemcarrito.js";

const findAll = (req, res) => {
    const itemcarritos = repository.findAll();
    return res.status(200).json(itemcarritos);
}

const create = (req, res) => {
    const itemcarrito = req.body;
    const itemcarritoCreated = repository.create(itemcarrito);
    return res.status(201).json(itemcarritoCreated)
}

const findOne = (req,res) => {
    const id = req.params.id;
    const result = repository.findOne(id);
    return res.status(200).json(result);
}

const update = (req, res) => {
    const itemcarrito = req.body;
    const result = repository.update(itemcarrito);
    return res.status(200).json(result)
}

const remove = (req, res) => {
    const id = req.params.id;
    const result = repository.remove(id);
    return res.status(200).json(result);
}

const controller = { findAll, create, findOne, update, remove }

export default controller;