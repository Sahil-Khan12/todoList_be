import express from 'express';
import { addTask, fetchTask, updateTask, deleteTask } from '../contollers/todoController.js';
const router = express.Router();

router.get('/', fetchTask);
router.post('/',addTask);
router.put('/:id', updateTask);
router.delete('/:id',deleteTask);

export default router;
