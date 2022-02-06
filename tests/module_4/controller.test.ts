import fs from 'fs';
import path from 'path';

describe('Creating controllers', () => {

  let controller: any;
  beforeAll((done) => {
    try {
      controller = fs.readFileSync(path.join(__dirname, '../../src/controllers/bookController.ts')).toString();
      if (controller) {
        done()
      }
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        done(new Error('You have to create the bookController.ts file at the controllers folder'));
      } else {
        done(error.message);
      }
    }
  });

  describe('get all books', () => {
    it('Creates the getBooks function', (done) => {
      try {
        expect(controller)
          .toContain('export const getBooks')
        done();
      } catch (error) {
        done(new Error('No exportable getBooks function detected in the code, tip: use arrow functions'));
      }
    });

    it('Should have the request and response arguments with the types', (done) => {
      try {
        expect(controller)
          .toContain('export const getBooks = async (req: Request, res: Response)')
        done();
      } catch (error) {
        done(new Error('No request - response arguments in getBookById function detected in the code. -> tip: use async functions'));
      }
    });

    it('should have a Book.find() method', (done) => {
      try {
        expect(controller)
          .toContain('Book.find({})')
        done();
      } catch (error) {
        done(new Error('No find method detected'));
      }
    });
    it('should save the response on a books variable with IBook type', (done) => {
      try {
        expect(controller)
          .toContain('const books: IBook[]')
        done();
      } catch (error) {
        done(new Error('No books variable with IBook type detected'));
      }
    });
    it('should have a response with status 200', (done) => {
      try {
        expect(controller)
          .toContain('res.status(200)')
        done();
      } catch (error) {
        done(new Error('No status response detected'));
      }
    });
    it('should return the response in a json', (done) => {
      try {
        expect(controller)
          .toContain('.json({ books })')
        done();
      } catch (error) {
        done(new Error('No json response detected'));
      }
    });
  });

  describe('getBookById', () => {
    it('Creates the getBookById function', (done) => {
      try {
        expect(controller)
          .toContain('export const getBookById')
        done();
      } catch (error) {
        done(new Error('No exportable getBookById function detected in the code, tip: use arrow functions'));
      }
    });

    it('Should have the request and response arguments with the types', (done) => {
      try {
        expect(controller)
          .toContain('export const getBookById = async (req: Request, res: Response)')
        done();
      } catch (error) {
        done(new Error('No request - response arguments in getBookById function detected in the code. -> tip: use async functions'));
      }
    });

    it('should have a Book.findById() method', (done) => {
      try {
        expect(controller)
          .toContain('Book.findById({')
        done();
      } catch (error) {
        done(new Error('No findById method detected'));
      }
    });
    it('should save the response on a book variable with IBook type', (done) => {
      try {
        expect(controller)
          .toContain('const book: IBook')
        done();
      } catch (error) {
        done(new Error('No book variable with IBook type detected'));
      }
    });
    it('should have a response with status 200', (done) => {
      try {
        expect(controller)
          .toContain('res.status(200)')
        done();
      } catch (error) {
        done(new Error('No status response detected'));
      }
    });
    it('should return the response in a json', (done) => {
      try {
        expect(controller)
          .toContain('.json({ book })')
        done();
      } catch (error) {
        done(new Error('No json response detected'));
      }
    });
  })
});