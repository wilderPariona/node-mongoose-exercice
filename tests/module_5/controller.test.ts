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

  describe('updateBook', () => {
    it('Creates the updateBook function', (done) => {
      try {
        expect(controller)
          .toContain('export const updateBook')
        done();
      } catch (error) {
        done(new Error('No exportable updateBook function detected in the code, tip: use arrow functions'));
      }
    });

    it('Should have the request and response arguments with the types', (done) => {
      try {
        expect(controller)
          .toContain('export const updateBook = async (req: Request, res: Response)')
        done();
      } catch (error) {
        done(new Error('No request - response arguments in updateBook function detected in the code. -> tip: use async functions'));
      }
    });

    it('should have a Book.findOneAndUpdate() method', (done) => {
      try {
        expect(controller)
          .toContain('Book.findOneAndUpdate({')
        done();
      } catch (error) {
        done(new Error('No findOneAndUpdate method detected'));
      }
    });

    it('should obtain the id from the params in bookId variable', (done) => {
      try {
        expect(controller)
          .toContain('const bookId')
        done();
      } catch (error) {
        done(new Error('No bookId variable detected'));
      }
    });

    it('should obtain the new info from the body in newBookInfo variable', (done) => {
      try {
        expect(controller)
          .toContain('const newBookInfo')
        done();
      } catch (error) {
        done(new Error('No newBookInfo variable detected'));
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

  });

  describe('deleteBook', () => {
    it('Creates the deleteBook function', (done) => {
      try {
        expect(controller)
          .toContain('export const deleteBook')
        done();
      } catch (error) {
        done(new Error('No exportable deleteBook function detected in the code, tip: use arrow functions'));
      }
    });

    it('Should have the request and response arguments with the types', (done) => {
      try {
        expect(controller)
          .toContain('export const deleteBook = async (req: Request, res: Response)')
        done();
      } catch (error) {
        done(new Error('No request - response arguments in deleteBook function detected in the code. -> tip: use async functions'));
      }
    });
    it('should obtain the id from the params in bookId variable', (done) => {
      try {
        expect(controller)
          .toContain('const bookId')
        done();
      } catch (error) {
        done(new Error('No bookId variable detected'));
      }
    });

    it('should have a Book.deleteOne() method', (done) => {
      try {
        expect(controller)
          .toContain('Book.deleteOne({')
        done();
      } catch (error) {
        done(new Error('No deleteOne method detected'));
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
    it('should send a message in json format', (done) => {
      try {
        expect(controller)
          .toContain('.json({ message: \'book successfully deleted\' })')
        done();
      } catch (error) {
        done(new Error('No message response detected -> tip: becareful with the spaces'));
      }
    });

  })
});