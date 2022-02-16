import { connect, connection } from 'mongoose';

export default (mongoURI: string): void => {
  try {
    connect(mongoURI);
    connection.once('connected', () =>
      console.log('Database Succesfully Connected!')
    );
    connection.on('error', (err) => {
      console.log('error', err);
    });
  } catch (error) {
    throw new Error('Error connecting database');
  }
};
