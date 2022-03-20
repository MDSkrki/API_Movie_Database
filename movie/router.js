import express from "express";
import * as controller from './controller.js';

const router = express.Router();

router.get('/', controller.getMovie);
router.post('/', controller.createMovie);
router.delete('/:id', controller.deleteMovie);
router.patch('/:id', controller.updateMovie);

router.post('/seeder', controller.seeder);
export default router;