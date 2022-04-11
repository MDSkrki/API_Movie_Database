import express from "express";
import authenticator from '../shared/middlewares/middleware.js';
import { getAllUsers, deleteUserById, updateUserById, createUser, userLogin, adminCreator } from "./controller.js";

// Router initialisation
const router = express.Router();

//user visibility and editing only allowed for admins
router.get('/', authenticator('admin'), getAllUsers);
router.delete('/:id', authenticator('admin'), deleteUserById);
router.patch('/:id', authenticator('admin'), updateUserById);

// Admins can access this endpoint to create more admins
router.post('/admin', authenticator('admin'), adminCreator);

// Free to enter endpoints in order to have users and give tokens
router.post('/register', createUser); 
router.post('/login', userLogin);

export default router;