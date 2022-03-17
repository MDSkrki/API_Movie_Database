import express from "express";
import * as controller from './controller.js'


const router = express.Router();

router.get('/', controller.getMovie);
router.post('/', controller.createMovie);
router.delete('/', controller.deleteMovie);
router.patch('/:id', controller.updateMovie);


export default router;