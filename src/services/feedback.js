import {getDB} from '../database/database';

export async function add({feedback, type}) {
    const db = await getDB();
    db.feedback.insert({feedback, type});
}

export async function query() {
    const db = await getDB();
    return db.feedback.find().exec();
}


