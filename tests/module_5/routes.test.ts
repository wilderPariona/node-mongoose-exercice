import fs from 'fs';
import path from 'path';

describe('Creating routes', () => {

  let controller: any;
  beforeAll((done) => {
    try {
      controller = fs.readFileSync(path.join(__dirname, '../../src/routes/bookRoutes.ts')).toString();
      if (controller) {
        done()
      }
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        done(new Error('You have to create the bookRoutes.ts file at the routes folder'));
      } else {
        done(error.message);
      }
    }
  });

  describe('update book route', () => {

    it('Should have the put method', (done) => {
      try {
        expect(controller)
          .toContain('.put(')
        done();
      } catch (error) {
        done(new Error('No put method detected'));
      }
    });

    it('Should have the /books route with the id param', (done) => {
      try {
        expect(controller)
          .toContain('.put(\'/books/:id\'')
        done();
      } catch (error) {
        done(new Error('No /books route detected'));
      }
    });

    it('Should have the updateBook controller route', (done) => {
      try {
        expect(controller)
          .toContain('.put(\'/books/:id\', updateBook)')
        done();
      } catch (error) {
        done(new Error('No updateBook controller detected'));
      }
    });
  });


  describe('delete route', () => {
    it('Should have the delete method', (done) => {
      try {
        expect(controller)
          .toContain('.delete(')
        done();
      } catch (error) {
        done(new Error('No delete method detected'));
      }
    });

    it('Should have the /books route with the id param', (done) => {
      try {
        expect(controller)
          .toContain('.delete(\'/books/:id\'')
        done();
      } catch (error) {
        done(new Error('No /books route detected'));
      }
    });

    it('Should have the deleteBook controller route', (done) => {
      try {
        expect(controller)
          .toContain('.delete(\'/books/:id\', deleteBook)')
        done();
      } catch (error) {
        done(new Error('No deleteBook controller detected'));
      }
    });
  })
});