import express from 'express';
const router = express.Router();

import { homeController } from '../controllers/homeController.js';
import { aboutController } from '../controllers/aboutController.js';
import { displayController } from '../controllers/displayController.js';

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/display', displayController);

export default router;