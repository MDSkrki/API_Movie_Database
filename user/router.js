import express from "express";
import * as controller from './controller.js';
import * as middleware from './middleware.js'
const router = express.Router();

router.get('/', middleware.authenticator('admin'), controller.getAllUsers); // Should only be allowed as admin
//router.get('/:id',controller.getUserById); // Returns User if id is correct;
router.post('/', middleware.authenticator('admin'), controller.createUser);
router.delete('/:id', controller.deleteUserById); //Should only be allowed as admin or to remove itself
router.patch('/:id', controller.updateUserById); //Should only be allowed by admin or to update itself

router.post('/register', controller.createUser); //this creates a user and gives a token directly (no login necessary after register)
router.post('/login', controller.userLogin); // this checks if user exists and gives token

export default router;

//TODO: endopoint /login will generate token if user is found
//TODO: endpoint /register will create a user
//TODO: make endpoint to createUser and store it into database, (token not necessary, but cool to have in order to avoid login post-signUp)