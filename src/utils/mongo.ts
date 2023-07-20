import { MongoClient } from 'mongodb';

import ENV from './env';

declare const global: {
  __MONGO_CLIENT_PROMISE__: Promise<MongoClient>;
};

const uri = ENV.MONGODB_URI;
const options = {};

let client: MongoClient;
let mongoClientPromise: Promise<MongoClient>;

if (ENV.NODE_ENV === 'development') {
  if (!global.__MONGO_CLIENT_PROMISE__) {
    client = new MongoClient(uri, options);
    global.__MONGO_CLIENT_PROMISE__ = client.connect();
  }

  mongoClientPromise = global.__MONGO_CLIENT_PROMISE__;
} else {
  client = new MongoClient(uri, options);
  mongoClientPromise = client.connect();
}

export default mongoClientPromise;
