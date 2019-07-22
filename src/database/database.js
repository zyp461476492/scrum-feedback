import RxDB from 'rxdb';

RxDB.plugin(require('pouchdb-adapter-node-websql'));

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
    adapter: 'websql',
    multiInstance: false,
  });
  console.log('DatabaseService: created database');

  // show leadership in title
  db.waitForLeadership().then(() => {
    console.log('isLeader now');
    document.title = '♛ ' + document.title;
  });

  // create collections
  console.log('DatabaseService: create collections');
  await Promise.all(collections.map(colData => db.collection(colData)));

  // sync remote collection
  await db.feedback.sync({
    remote: 'http://localhost:1234/db/feedback'
  });

  return db;
};

export const getDB = () => {
  if (!dbPromise) dbPromise = _create();
  return dbPromise;
};
