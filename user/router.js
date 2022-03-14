import express from "express";
import * as controller from './controller.js';
const router = express.Router();

router.get('/', controller.getAllUsers);
router.get('/:id',controller.getUserById); // Returns User if id is correct
router.post('/', controller.createUser);
router.delete('/:id', controller.deleteUserById);
router.patch('/:id', controller.updateUserById);

export default router;