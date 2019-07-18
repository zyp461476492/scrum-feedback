import RxDB from 'rxdb';

RxDB.plugin(require('pouchdb-adapter-idb'));

let db = null;

const feedbackSchema = {
    title: 'feedbackSchema',
    version: 0,
    description: 'xxx',
    type: 'object',
    properties: {
        feedback: {
            type: "string"
        },
        type: {
            type: "string"
        }
    }
};

const _create = async () => {
    const db = await RxDB.create({
        name: 'heroesdb',           // <- name
        adapter: 'idb',          // <- storage-adapter
        password: 'myPassword',     // <- password (optional)
        multiInstance: true,         // <- multiInstance (optional, default: true)
        queryChangeDetection: false // <- queryChangeDetection (optional, default: false)
    });

    await db.collection({ name: 'feedback', schema: feedbackSchema });

    return db;
}

export async function get() {
    if (!db)
    db = _create();
return db;
}

export async function query() {
    const db = await get();
    const result = await db.feedback.find().exec();
    return result;
}



// db.collection({name: 'feedback', schema: feedbackSchema});

// create database
// export async function add(obj) {
//     console.log('DB');
//     console.dir(db);
//     db.feedback.insert(obj);
// }

