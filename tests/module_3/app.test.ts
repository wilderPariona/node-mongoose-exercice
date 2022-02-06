import fs from 'fs';
import path from 'path';

describe('Server tests module 3', function () {
  let app: any;
  beforeAll((done) => {
    try {
      app = fs.readFileSync(path.join(__dirname, '../../src/app.ts')).toString();
      if (app) {
        done()
      }
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        done(new Error('You have to create an app.ts file at the src root folder'));
      } else {
        done(error.message);
      }
    }
  });

  it('should have bookRouter as midleware in the main function', (done) => {
    try {
      expect(app).toContain('app.use(bookRouter)');
      done();
    } catch (error) {
      done(new Error('No router detected in the main app'));
    }
  });

  it('should have the express.json as midleware in the main function', (done) => {
    try {
      expect(app).toContain('app.use(express.json())');
      done();
    } catch (error) {
      done(new Error('No express.json middleware detected in the main app'));
    }
  });

});