import express from 'express';
const router = express.Router();

import {homeController, createController1, createController2, displayController1, displayController2, displayAllController, destroyController} from '../controllers/homeController.js';

router.get('/', homeController);
router.get('/create1', createController1);
router.get('/create2', createController2);
router.get('/display1', displayController1);
router.get('/display2', displayController2);
router.get('/displayAll', displayAllController);
router.get('/destroy', destroyController);

export default router;