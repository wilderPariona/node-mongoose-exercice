import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

import { CleanedEnvAccessors, cleanEnv, num } from 'envalid'

describe('index tests', function () {
  let index: any;
  let env: Readonly<{
    PORT: number;
  } & CleanedEnvAccessors>
  beforeAll((done) => {
    try {
      if (!process.env.PORT) {
        throw new Error('You do not have a .env file or a PORT variable definend');

      } else {
        env = cleanEnv(process.env, {
          PORT: num(),
        })
      }

      index = fs.readFileSync(path.join(__dirname, '../../src/index.ts')).toString();
      if (index) {
        done()
      }
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        done(new Error('You do not have an index.ts file at the src root folder'));
      } else {
        done(error.message);
      }
    }
  });

  it('should have database configuration function', (done) => {
    try {
      expect(index).toContain('dbConnection(`${process.env.MONGO_URI}`)');
      done();
    } catch (error) {
      done(new Error('You have to create a dbConnection function and pass the MONGO_URI variable as argumment'));
    }
  });

});