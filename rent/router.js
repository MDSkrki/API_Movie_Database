import express from "express";
import { createRent, getRent } from "./controller.js";

const router = express.Router();

router.get('/', getRent);
router.post('/', createRent);

export default router;