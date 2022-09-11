import express from 'express';
const router = express.Router();

import { personController, allPersonController } from '../controllers/personController.js';
import { personLogger, allPersonLogger } from '../middlewares/personMiddleware.js';

// Route Level Middleware
router.use(personLogger);
router.use('/person', personController);

// Path Level
router.use('/allperson', allPersonLogger);
router.get('/allperson', allPersonController);

export default router;