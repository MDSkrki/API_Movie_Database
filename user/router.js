import express from "express";
import * as controller from './controller.js';
const router = express.Router();

router.get('/', controller.getTest);
router.post('/', controller.postTest);
router.delete('/:id', controller.deleteTest);
router.patch('/:testKey', controller.patchTestByTestKey);

export default router;