import fs from 'fs';
import path from 'path';

describe('app tests', function () {
  let app: any;
  beforeAll((done) => {
    try {

      app = fs.readFileSync(path.join(__dirname, '../../src/app.ts')).toString();
      if (app) {
        done()
      }
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        done(new Error('You do not have an app.ts file at the src root folder'));
      } else {
        done(error.message);
      }
    }
  });

  it('should have an express instance', (done) => {
    try {
      expect(app).toContain('express()');
      done();
    } catch (error) {
      done(new Error('No express instance detected'));
    }
  });

  it('should export app as default ', (done) => {
    try {
      expect(app).toContain('export default app');
      done();
    } catch (error) {
      done(new Error('No app export detected'));
    }
  });

});