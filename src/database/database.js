import RxDB from 'rxdb';

import * as PouchHttpPlugin from 'pouchdb-adapter-http';
RxDB.plugin(PouchHttpPlugin);
RxDB.plugin(require('pouchdb-adapter-idb'));

const collections = [
  {
    name: 'feedback',
    schema: require('./schema.js').default,
    sync: true,
  },
];

let dbPromise = null;

const _create = async () => {
  console.log('DatabaseService: creating database..');
  const db = await RxDB.create({
    name: 'feedbackdb',
    adapter: 'idb',
    multiInstance: false,
  });
  console.log('DatabaseService: created database');

  // create collections
  console.log('DatabaseService: create collections');
  await Promise.all(collections.map(colData => db.collection(colData)));

  // sync remote collection
  await db.feedback.sync({
    remote: 'http://172.22.9.99:1234/db/feedback',
  });

  return db;
};

export const getDB = () => {
  if (!dbPromise) dbPromise = _create();
  return dbPromise;
};
