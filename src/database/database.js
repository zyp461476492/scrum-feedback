import RxDB from 'rxdb';

RxDB.plugin(require('pouchdb-adapter-idb'));

const collections = [
    {
        name: 'feedback',
        schema: require('./schema.js').default,
        methods: {
            hpPercent() {
                return this.hp / this.maxHP * 100;
            }
        },
        sync: true
    }
];


let dbPromise = null;

const _create = async () => {
    console.log('DatabaseService: creating database..');
    const db = await RxDB.create({name: 'heroesreactdb', adapter: 'idb', password: 'myLongAndStupidPassword'});
    console.log('DatabaseService: created database');

    // show leadership in title
    db.waitForLeadership().then(() => {
        console.log('isLeader now');
        document.title = '♛ ' + document.title;
    });

    // create collections
    console.log('DatabaseService: create collections');
    await Promise.all(collections.map(colData => db.collection(colData)));

    return db;
};

export const getDB = () => {
    if (!dbPromise)
        dbPromise = _create();
    return dbPromise;
}