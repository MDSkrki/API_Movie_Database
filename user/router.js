import express from "express";
import * as controller from './controller.js';
const router = express.Router();

router.get('/', controller.getAllUsers); // Should only be allowed as admin
router.get('/:id',controller.getUserById); // Returns User if id is correct
router.post('/', controller.createUser); //Should only be allowed as admin (unless create itself??)
router.delete('/:id', controller.deleteUserById); //Should only be allowed as admin or to remove itself
router.patch('/:id', controller.updateUserById); //Should only be allowed by admin or to update itself

export default router;