import express from "express";
import { 
    getUsers, 
    getUserById,
    saveUser,
    updateUser,
    deleteUser,
    loginUser
} from "../controllers/UserController.js";

const router = express.Router();

router.post('/users', saveUser);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

router.post('/login', loginUser);

export default router;