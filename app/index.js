const express = require('express');
const path = require('path');
const sass = require('node-sass-middleware');

const app = express();

console.log(__dirname);
app.use(sass({
  src: path.join(__dirname, 'scss'),
  dest: path.join(__dirname, '../wwwroot'),
  debug: false,
  outputStyle: 'compressed',
}));

app.set('views', __dirname);
app.set('view engine', 'pug');

app.use(require('./site/router'))

app.use(require('./errors/not-found'))

module.exports = app
