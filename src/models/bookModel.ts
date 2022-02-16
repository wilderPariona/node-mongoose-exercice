import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

export interface IBook extends Document {
  title: string;
  overview: string;
  category: string;
  price: number;
  created_date: Date;
}

export const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  category: String,
  price: {
    type: Number,
    required: true,
  },
  created_date: Date,
});

export const BookModel = mongoose.model<IBook>('Book', BookSchema);
