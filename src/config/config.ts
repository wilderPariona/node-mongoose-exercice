import mongoose from 'mongoose';

export default (db: string): void => {
  try {
    mongoose.connect(db);
    mongoose.connection.on('error', _ => {
      throw new Error('error connecting database');
    });
    mongoose.connection.once('connected', () => console.log('Database Succesfully Connected!'))
  } catch (error) {
    throw new Error('error connecting database');
  }
};