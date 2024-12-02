import express from 'express';

import controller from '../controllers/stockProductos.js';

const router = express.Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findOne);
router.get('/producto/:id', controller.findOneByProducto);
router.get('/producto-t/:id/talla/:talla', controller.findOneByProductoTalla);

router.post('/', controller.create); 
router.put('/', controller.update);
router.delete('/:id', controller.remove);

export default router;