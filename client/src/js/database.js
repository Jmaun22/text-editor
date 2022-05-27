import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
      return;
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  
  console.error('putDb not implemented');

// creating a connection to the data base

const jateDB = await openDB('jate', 1);

// read anad write privaliges

const tx = jateDB.transaction('jate', 'readwrite');

// open up derised store

const store = tx.objectStore('jate');

const request = store.add({ content: content});

// confirmation request

const result = await request;

console.log(' data is saved to database', result)
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async (event) => {
  
  // console.error('getDb not implemented');

  // create a connection to the database

  const jateDB = await openDB('jate', 1);

  // create a new transaction and specify the database

  const tx = jateDB.transaction('jate', 'readonly');

  // open up in desired store

  const store = tx.objectStore("jate");

  // get confirmation of a request

  const request = store.get(1);

  // Get confirmation of the request
  const result = await request;
  
  return result?.value;
};



initdb();
