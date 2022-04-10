import express from "express";
import authenticator from '../shared/middlewares/middleware.js';
import { getAllUsers, deleteUserById, updateUserById, createUser, userLogin } from "./controller.js";
const router = express.Router();

//user visibility and editing only allowed for admins
router.get('/', authenticator('admin'), getAllUsers);
router.delete('/:id', authenticator('admin'), deleteUserById);
router.patch('/:id', authenticator('admin'), updateUserById);

router.post('/register', createUser); //this creates a user and gives a token directly (no login necessary after register)
router.post('/login', userLogin); // this checks if user exists and gives token if true

export default router;