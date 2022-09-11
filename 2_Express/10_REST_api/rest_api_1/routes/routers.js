import express from 'express';
const router = express.Router();
import {indexController, homeController, singleController, newController, putController,  patchController, delController } from '../controllers/homeController.js';

router.get('/', indexController);
router.get('/persons/', homeController);
router.get('/persons/:id', singleController);
router.post('/persons', newController);
router.put('/persons/:id', putController);
router.patch('/persons/:id', patchController);
router.delete('/persons/:id', delController);

export default router;