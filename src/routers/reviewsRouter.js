
import express from "express";
import { index, show, create, modify, destroy } from '../controllers/reviewsController.js';
import validateCreateReview from "../middlewares/validateCreateReview.js";

const reviewsRouter = express.Router();

// INDEX hhtp://localhost:3000/products
reviewsRouter.get('/', index)

// SHOW hhtp://localhost:5555/products/:id
reviewsRouter.get('/:id', show);

// CREATE
reviewsRouter.post('/',validateCreateReview, create);

// PATCH
reviewsRouter.patch('/:id', modify)

// DELETE
reviewsRouter.delete('/:id', destroy)

export default reviewsRouter;

