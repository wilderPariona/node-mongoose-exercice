import { Router } from 'express';
import {
  addNewBook,
  getBookById,
  getBooks,
} from '../controllers/bookController';

const router = Router();

router.post('/books', addNewBook);
router.get('/books', getBooks);
router.get('/books/:id', getBookById);

export default router;
