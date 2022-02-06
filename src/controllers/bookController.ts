import { Request, Response } from "express"
import { BookModel as Book, IBook } from "../models/bookModel";

export const addNewBook = async (req: Request, res: Response) => {
  try {
    const newBook: IBook = new Book();
    const book: IBook = await newBook.save(req.body);
    res.status(200).json({ book })
  } catch (error) {
    console.log(error);
  }
}
export const getBooks = async (req: Request, res: Response) => {
  try {
    const books: IBook[] = await Book.find({});
    res.status(200).json({ books })
  } catch (error) {
    console.log(error);
  }
}
export const getBookById = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const book: IBook | null = await Book.findById({ bookId });
    res.status(200).json({ book })
  } catch (error) {
    console.log(error);
  }
}
export const updateBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const newBookInfo = req.body;
    const book: IBook | null = await Book.findOneAndUpdate({ _id: bookId }, newBookInfo, { new: true });
    res.status(200).json({ book })
  } catch (error) {
    console.log(error);
  }
}
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    await Book.deleteOne({ _id: bookId });
    res.status(200).json({ message: 'book successfully deleted' })
  } catch (error) {
    console.log(error);
  }
}