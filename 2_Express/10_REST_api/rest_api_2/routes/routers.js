import express from 'express';
const router = express.Router();
import { homeController, singleController, newController, putController, delController } from '../controllers/homeController.js';

router.get('/persons/', homeController);
router.get('/persons/:id', singleController);
router.post('/persons/', newController);
router.put('/persons/:id', putController);
// router.patch('/persons/:id', putController);
router.delete('/persons/:id', delController);

export default router;