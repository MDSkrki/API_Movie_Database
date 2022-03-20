import express from "express";
import * as controller from './controller.js';
import authenticator from '../shared/middlewares/middleware.js'
const router = express.Router();

//user visibility and editing only allowed for admins
router.get('/', authenticator('admin'), controller.getAllUsers); 
router.delete('/:id', authenticator('admin'), controller.deleteUserById); 
router.patch('/:id', authenticator('admin'), controller.updateUserById); 

router.post('/register', controller.createUser); //this creates a user and gives a token directly (no login necessary after register)
router.post('/login', controller.userLogin); // this checks if user exists and gives token if true

export default router;