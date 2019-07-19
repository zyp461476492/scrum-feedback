import { getDB } from '../database/database';

function test(resolve, reject) {
    var timeOut = Math.random() * 2;
    console.log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            console.log('call resolve()...');
            resolve('200 OK');
        }
        else {
            console.log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);
}

export async function add({ feedback, type }) {
  const db = await getDB();
  console.log(new Date().getTime());
  const a = new Promise((resolve, reject) => {
    // async process ...
    var timeOut = Math.random() * 20;
    console.log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            console.log('call resolve()...');
            resolve('200 OK');
        }
        else {
            console.log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);
  });
  await a;
  db.feedback.insert({ feedback, type });
  console.log(new Date().getTime());
}

export async function query() {
  const db = await getDB();
  return db.feedback.find().exec();
}
