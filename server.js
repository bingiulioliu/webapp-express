import express from 'express';
import reviewsRouter from './src/routers/reviewsRouter.js';

import productsRouter from './src/routers/productsRouter.js';

const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.use(express.json());
app.use(express.static('public'));
app.use('/reviews', reviewsRouter);
app.use('/products', productsRouter);


app.use('/reviews', reviewsRouter);
app.use('/products', productsRouter);

app.listen(port, (error) => {
    if (error) {
        console.error("Error starting server:", error);
    } else {
        console.log(`Server is running on http://${host}:${port}`);
    }
})