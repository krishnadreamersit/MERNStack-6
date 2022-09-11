import express from 'express';
const router = express.Router();
import { homeController, createController, displayController, pageNotFound } from '../controllers/homeController.js';

router.get('/', homeController);
router.get('/create', createController);
router.post('/display', displayController);
router.get('/*', pageNotFound);

export default router;