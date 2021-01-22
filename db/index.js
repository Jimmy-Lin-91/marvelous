const mongoose = require('mongoose');
const config = require('../config.json');
mongoose.Promise = global.Promise;

const mongoURI = `mongodb+srv://Jimmy:${config.mongoPassword}@users.x162c.mongodb.net/${config.dbName}?retryWrites=true&w=majority`;

const db = mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to Users Database');
  })
  .catch((err) => {
    console.log('Failed to connect!', err);
  })

  module.exports = db;