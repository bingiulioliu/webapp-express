import express from "express";

import { index, show, create, modify, destroy } from '../controllers/productsController.js';

const productRouter = express.Router();

// INDEX hhtp://localhost:3000/products
productRouter.get('/', index)

// SHOW hhtp://localhost:5555/products/:id
productRouter.get('/:id', show);

// CREATE
productRouter.post('/', create)

// PATCH
productRouter.patch('/:id', modify)

// DELETE
productRouter.delete('/:id', destroy)

export default productRouter;
