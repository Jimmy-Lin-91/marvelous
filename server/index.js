const express = require('express');
const path = require('path');
const port = 3000;
const morgan = require('morgan');
const db = require('../db/index');
const bodyparser = require('body-parser');
const router = require('./router');
const app = express();
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use('/', router);
app.use(bodyparser.json());
app.listen(port, () => {
  console.log(`Connected to ${port}`);
})