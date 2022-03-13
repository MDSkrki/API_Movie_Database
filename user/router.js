import express from "express";
import {getTest } from './controller.js'
const router = express.Router();

router.get('/', getTest)

export default router;