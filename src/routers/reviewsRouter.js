import express from 'express';
import { destroy } from '../controllers/reviewsController.js'; 

const router = express.Router();

router.delete('/:id', destroy);

export default router;