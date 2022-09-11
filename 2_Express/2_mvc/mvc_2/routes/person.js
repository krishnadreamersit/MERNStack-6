import express from 'express';
const router = express.Router();
import {allPersons, deletePerson} from '../controllers/personController.js';

router.get('/all', allPersons);
router.get('/delete/:id', deletePerson);

export default router