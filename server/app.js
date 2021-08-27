const { join } = require('path');
require('env2')('./config.env');
const express = require('express');
const compression = require('compression');
// const cookieParse = require('cookie-parser');
// const router = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.disabled('x-powered-by');
app.set('port', process.env.PORT || 5000);

app.use(express.static(join(__dirname, '..', 'public')));

// app.use(cookieParse());
// app.use(router);

module.exports = app;