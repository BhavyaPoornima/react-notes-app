// db.js
const mongoose = require('mongoose');

const username = 'your_username';
const password = 'your_password';
const dbName = 'eact-notes-app';

mongoose.connect(`mongodb://${username}:${password}@localhost:3003/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => {
  console.error(error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});