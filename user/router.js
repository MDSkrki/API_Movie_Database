import express from "express";
import * as controller from './controller.js';
const router = express.Router();

router.get('/:id', controller.getUser); // Returns User if id is correct
router.post('/', controller.createUser);
router.delete('/:id', controller.deleteUserById);
router.patch('/:testKey', controller.patchTestByTestKey);

export default router;