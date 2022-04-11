import express from "express";
import authenticator from "../shared/middlewares/middleware.js";
import { getMovie, createMovie, deleteMovie, updateMovie, seeder } from "./controller.js";

const router = express.Router();

router.get('/', authenticator('user'), getMovie);
router.post('/', authenticator('admin'), createMovie);
router.delete('/', authenticator('admin'), deleteMovie);
router.patch('/:id', authenticator('admin'), updateMovie);

router.post('/seeder', seeder);
export default router;