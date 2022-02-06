import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import mongoose, { Mongoose, Connection, connection } from 'mongoose';
import dbConnection from '../../src/config/config'

jest.mock('mongoose', () => {
  return {
    connect: jest.fn(),
    connection: {
      on: jest.fn(),
      once: jest.fn()
    },
  }
})

dotenv.config();

import { CleanedEnvAccessors, cleanEnv, str } from 'envalid'

describe('mongoose configuration', function () {
  let config: any;
  let env: Readonly<{
    MONGO_URI: string;
  } & CleanedEnvAccessors>

  const mongooseConnectSpyOn = jest
    .spyOn<Mongoose, 'connect'>(mongoose, 'connect')
    .mockImplementationOnce((uris: string) => {
      return Promise.resolve(mongoose);
    });
  const mongooseConnectionSpyOn = jest
    .spyOn<Connection, 'once'>(mongoose.connection, 'once')

  const mongooseConnectionOnSpyOn = jest
    .spyOn<Connection, 'on'>(mongoose.connection, 'on')


  beforeAll((done) => {
    try {
      if (!process.env.MONGO_URI) {
        throw new Error('You have to create a .env file and define a MONGO_URI variable with mongodb://localhost/productsdb as value');

      } else {
        env = cleanEnv(process.env, {
          MONGO_URI: str(),
        })
      }
      config = fs.readFileSync(path.join(__dirname, '../../src/config/config.ts')).toString();
      if (config) {
        done()
      }
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        done(new Error('You have to create an config.ts file at the src/config folder'));
      } else {
        done(error.message);
      }
    }
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should connect database succesfully', done => {
    try {
      dbConnection(env.MONGO_URI)
      expect(mongooseConnectSpyOn).toBeCalledWith(env.MONGO_URI);
      done()
    } catch (error) {
      done(new Error('You have to set a new connection'))
    }
  });

  it('should report the connection status ', (done) => {
    try {
      dbConnection(env.MONGO_URI)
      expect(mongooseConnectionSpyOn).toHaveBeenCalledTimes(1)
      expect(mongooseConnectionSpyOn).toBeCalledWith('connected', expect.any(Function))
      done()
    } catch (error) {
      done(new Error('You have to report the connection status'))
    }
  });

  it('connect database error', done => {

    try {
      dbConnection('')
      expect(mongooseConnectionOnSpyOn).toBeCalledWith('error', expect.any(Function));
      done()
    } catch (error) {
      done(new Error('You have to catch the connection error'))
    }
  });
});


