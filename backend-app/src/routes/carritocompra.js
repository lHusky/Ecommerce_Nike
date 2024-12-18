import express from 'express';

import controller from '../controllers/carritocompra.js';

const router = express.Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findOne);
router.get('/user/:id', controller.findOneByUser);
router.post('/', controller.create); 
router.put('/', controller.update);
router.delete('/:id', controller.remove);

export default router;