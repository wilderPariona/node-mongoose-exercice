import fs from 'fs';
import path from 'path';

describe('Creating models', () => {
  let model: any;
  beforeAll((done) => {
    try {
      model = fs.readFileSync(path.join(__dirname, '../../src/models/bookModel.ts')).toString();
      if (model) {
        done()
      }
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        done(new Error('You have to create the bookModel.ts file at the models folder'));
      } else {
        done(error.message);
      }
    }
  });

  it('Creates the interface and extends from document', (done) => {
    try {
      expect(model)
        .toContain('export interface IBook extends Document {')
      done();
    } catch (error) {
      done(new Error('No interface detected or not extends from Document'));
    }
  });

  it('Create the schema', (done) => {
    try {
      expect(model)
        .toContain('export const BookSchema = new Schema({')
      expect(model)
        .toContain('const Schema = mongoose.Schema;')
      done();
    } catch (error) {
      done(new Error('No schema detected in your code'));
    }
  });

  it('should export the BookModel', (done) => {
    try {
      expect(model)
        .toContain('export const BookModel = mongoose.model')
      done();
    } catch (error) {
      done(new Error('No model detected in your code'));
    }
  });

  it('should export the BookModel with IBook interface', (done) => {
    try {
      expect(model)
        .toContain('export const BookModel = mongoose.model<IBook>')
      done();
    } catch (error) {
      done(new Error('The model does not have the IBook type'));
    }
  });

  describe('schema properties', () => {
    it('has the title property', (done) => {
      try {
        expect(model)
          .toContain('title:')
        done();
      } catch (error) {
        done(new Error('No title property detected in the schema'));
      }
    });
    it('has the overview property', (done) => {
      try {
        expect(model)
          .toContain('overview:')
        done();
      } catch (error) {
        done(new Error('No overview property detected in the schema'));
      }
    });
    it('has the category property', (done) => {
      try {
        expect(model)
          .toContain('category:')
        done();
      } catch (error) {
        done(new Error('No category property detected in the schema'));
      }
    });
 
    it('has the price property', (done) => {
      try {
        expect(model)
          .toContain('price:')
        done();
      } catch (error) {
        done(new Error('No price property detected in the schema'));
      }
    });
    it('has the price property', (done) => {
      try {
        expect(model)
          .toContain('price:')
        done();
      } catch (error) {
        done(new Error('No price property detected in the schema'));
      }
    });
  });
});