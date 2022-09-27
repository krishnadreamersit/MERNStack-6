import express from "express";
import { 
    getPersons, 
    getPersonById,
    savePerson,
    updatePerson,
    deletePerson
} from "../controllers/PersonController.js";

import VerifyToken from '../mylibs/VerifyToken.js'

const router = express.Router();

router.get('/persons', VerifyToken, getPersons);
router.get('/persons/:id', getPersonById);
router.post('/persons', savePerson);
router.patch('/persons/:id', updatePerson);
router.delete('/persons/:id', deletePerson);

export default router;