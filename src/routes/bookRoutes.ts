import { Router } from 'express';
import { addNewBook } from '../controllers/bookController';

const router = Router();

router.post('/books', addNewBook);

export default router;
