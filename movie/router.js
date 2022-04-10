import express from "express";
import { getMovie, createMovie, deleteMovie, updateMovie, seeder } from "./controller.js";

const router = express.Router();

router.get('/', getMovie);
router.post('/', createMovie);
router.delete('/:id', deleteMovie);
router.patch('/:id', updateMovie);

router.post('/seeder', seeder);
export default router;