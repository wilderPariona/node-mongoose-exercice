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
