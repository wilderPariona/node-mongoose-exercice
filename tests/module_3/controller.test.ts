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

  it('Creates the addNewBook function', (done) => {
    try {
      expect(controller)
        .toContain('export const addNewBook')
      done();
    } catch (error) {
      done(new Error('No exportable addNewBook function detected in the code, tip: use arrow functions'));
    }
  });

  it('Should have the request and response arguments with the types', (done) => {
    try {
      expect(controller)
        .toContain('export const addNewBook = async (req: Request, res: Response)')
      done();
    } catch (error) {
      done(new Error('No request - response arguments in addNewBook function detected in the code tip: use async functions'));
    }
  });

  it('should have a response with status 200', (done) => {
    try {
      expect(controller)
        .toContain('res.status(200).json(')
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