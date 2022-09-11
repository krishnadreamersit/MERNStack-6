import express from 'express';
const router = express.Router();

import { homeController } from '../controllers/homeController.js';
import { aboutController } from '../controllers/aboutController.js';

router.get('/', homeController); //127.0.0.1/-> middleware-> homeController
router.get('/about', aboutController);

export default router;