import express, { Application } from 'express';
import dbConnection from './config/config';
import dotenv from 'dotenv';
import bookRouter from './routes/bookRoutes';

dotenv.config();

const app: Application = express();



app.use(express.json());

app.use(bookRouter);

export default app;