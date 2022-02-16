import express, { Application } from 'express';
import bookRouter from './routes/bookRoutes';

const app: Application = express();

app.use(express.json());

app.use(bookRouter);

export default app;
