import { Router } from 'express';
import { addNewBook, deleteBook, getBookById, getBooks, updateBook } from '../controllers/bookController';

const router = Router();

router.post('/books', addNewBook);
router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;