import express from 'express';
import controller from '../controllers/usuario.js';

const router = express.Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findOne);
router.get('/email/:Email', controller.findOneEmail);
router.post('/', controller.create);
router.put('/', controller.update);
router.delete('/:id', controller.remove);
router.put('/:id/updatePassword', controller.updatePassword);

// Rutas de envío y verificación de código
router.post('/send-code', controller.sendVerificationCode);
router.post('/verify-code', controller.verifyCode);

export default router;
