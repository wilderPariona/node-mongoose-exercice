import { Request, Response } from 'express';
import { BookModel, IBook } from '../models/bookModel';

export const addNewBook = async (req: Request, res: Response) => {
  try {
    const { title, overview, category, price, created_date } = req.body;
    const newBook: IBook = new BookModel({
      title,
      overview,
      category,
      price,
      created_date,
    });
    const book = await newBook.save();
    res.status(200).json({ book });
  } catch (error) {
    console.log(error);
  }
};

export const getBooks = async (req: Request, res: Response) => {
  try {
    const Book = BookModel;
    const books: IBook[] = await Book.find({});
    res.status(200).json({ books });
  } catch (error) {
    res.json({
      msj: 'ocurrio un error',
    });
    console.log(error);
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const Book = BookModel;
    const book: IBook | null = await Book.findById(bookId);
    if (!book) {
      throw new Error('No existe el libro');
    }
    res.status(200).json({ book });
  } catch (error) {
    res.json({
      msj: 'ocurrio un error',
    });
    console.log(error);
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const { title, overview, category, price, created_date } = req.body;
    const newBookInfo = { title, overview, category, price, created_date };
    const Book = BookModel;
    const book: IBook | null = await Book.findOneAndUpdate({
        _id: bookId,
      },
      newBookInfo,
      {
        new: true,
      }
    );
    if (!book) {
      throw new Error('No existe el libro');
    }
    res.status(200).json({ book });
  } catch (error) {
    res.json({
      msj: 'ocurrio un error',
    });
    console.log(error);
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const Book = BookModel;
    await Book.deleteOne({
      _id: bookId,
    });

    res.status(200).json({ message: 'book successfully deleted' });
  } catch (error) {
    res.json({
      msj: 'ocurrio un error',
    });
    console.log(error);
  }
};
