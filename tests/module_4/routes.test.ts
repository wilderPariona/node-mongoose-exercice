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



  it('Should have the get method', (done) => {
    try {
      expect(controller)
        .toContain('.get(')
      done();
    } catch (error) {
      done(new Error('No get method detected'));
    }
  });

  it('Should have the /books route', (done) => {
    try {
      expect(controller)
        .toContain('.get(\'/books\'')
      done();
    } catch (error) {
      done(new Error('No /books route detected'));
    }
  });

  it('Should have the /books route with the id param', (done) => {
    try {
      expect(controller)
        .toContain('.get(\'/books/:id\'')
      done();
    } catch (error) {
      done(new Error('No /books route detected'));
    }
  });

  it('Should have the getBooks controller route', (done) => {
    try {
      expect(controller)
        .toContain('.get(\'/books\', getBooks)')
      done();
    } catch (error) {
      done(new Error('No getBooks controller detected'));
    }
  });

  it('Should have the getBookById controller route', (done) => {
    try {
      expect(controller)
        .toContain('.get(\'/books/:id\', getBookById)')
      done();
    } catch (error) {
      done(new Error('No getBookById controller detected'));
    }
  });
});