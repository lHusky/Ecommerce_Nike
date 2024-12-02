import repository from "../repositories/carritocompra.js";

const findAll = (req, res) => {
    const carritocompras = repository.findAll();
    return res.status(200).json(carritocompras);
}

const create = (req, res) => {
    const carritocompra = req.body;
    const carritoscompra = repository.findAll();
    const newId = carritoscompra.length > 0 ? carritoscompra[carritoscompra.length - 1].id + 1 : 1;
    carritocompra.id = newId;

    const carritocompraCreated = repository.create(carritocompra);
    return res.status(201).json(carritocompraCreated)
}

const findOne = (req,res) => {
    const id = req.params.id;
    const result = repository.findOne(id);
    return res.status(200).json(result);
}

const findOneByUser = (req,res) => {
    const id = req.params.id;
    const result = repository.findOneByUser(id);
    return res.status(200).json(result);
}

const update = (req, res) => {
    const carritocompra = req.body;
    const result = repository.update(carritocompra);
    return res.status(200).json(result)
}

const remove = (req, res) => {
    const id = req.params.id;
    const result = repository.remove(id);
    return res.status(200).json(result);
}

const controller = { findAll, create, findOne,findOneByUser, update, remove }

export default controller;