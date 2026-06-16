import express from 'express';
import reviewsRouter from './src/routers/reviewsRouter.js';
import categoriesRouter from './src/routers/categoriesRouter.js';
import productsRouter from './src/routers/productsRouter.js';
import cors from 'cors';


const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/reviews', reviewsRouter);
app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);

app.listen(port, (error) => {
    if (error) {
        console.error("Error starting server:", error);
    } else {
        console.log(`Server is running on http://${host}:${port}`);
    }
});
