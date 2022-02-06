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

  it('Creates the router instance', (done) => {
    try {
      expect(controller)
        .toContain('Router()')
      done();
    } catch (error) {
      done(new Error('No Router instance created'));
    }
  });

  it('Should have the post method', (done) => {
    try {
      expect(controller)
        .toContain('.post(')
      done();
    } catch (error) {
      done(new Error('No post method detected'));
    }
  });

  it('Should have the /books route', (done) => {
    try {
      expect(controller)
        .toContain('.post(\'/books\'')
      done();
    } catch (error) {
      done(new Error('No /books route detected'));
    }
  });

  it('Should have the addNewBook controller route', (done) => {
    try {
      expect(controller)
        .toContain('.post(\'/books\', addNewBook)')
      done();
    } catch (error) {
      done(new Error('No addNewBook controller detected'));
    }
  });

});