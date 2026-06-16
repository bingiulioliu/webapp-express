
import express from "express";
import { index, show, create, modify, destroy } from '../controllers/reviewsController.js';
import validationCreateReview from "../middlewares/validationCreateReview.js";

const reviewsRouter = express.Router();

// INDEX 
reviewsRouter.get('/', index)

// SHOW 
reviewsRouter.get('/:id', show);

// CREATE
reviewsRouter.post('/',validationCreateReview, create);

// PATCH
reviewsRouter.patch('/:id', modify)

// DELETE
reviewsRouter.delete('/:id', destroy)

export default reviewsRouter;

