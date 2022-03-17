import express from "express";
import * as controller from './controller.js';
import * as middleware from './middleware.js'
const router = express.Router();

router.get('/', middleware.userFinder, middleware.authenticator('user'), controller.getAllUsers); // Should only be allowed as admin
//router.get('/:id',controller.getUserById); // Returns User if id is correct;
router.post('/', controller.createUser); //Should only be allowed as admin (unless create itself??)
router.delete('/:id', controller.deleteUserById); //Should only be allowed as admin or to remove itself
router.patch('/:id', controller.updateUserById); //Should only be allowed by admin or to update itself

export default router;

//TODO: make endpoint to createUser and store it into database, (token not necessary, but cool to have in order to avoid login post-signUp)