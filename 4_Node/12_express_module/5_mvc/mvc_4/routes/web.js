import express from 'express';
const router = express.Router();
import ejs from 'ejs';

import { homeController } from '../controllers/homeController.js';
import { aboutController } from '../controllers/aboutController.js';

router.get('/', homeController);
router.get('/about', aboutController);

export default router;