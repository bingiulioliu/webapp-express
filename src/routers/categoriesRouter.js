import express from "express";

import { index, show} from '../controllers/categoriesController.js';

const categoriesRouter = express.Router();

// INDEX hhtp://localhost:3000/products
categoriesRouter.get('/', index)

// SHOW hhtp://localhost:5555/products/:id
categoriesRouter.get('/:id', show);



export default categoriesRouter;
