const router = require('./router');
const errorsHandler = require('./middleware');
const express = require('express');
const app = express();

app.use(express.json());

app.use('/api', router);

console.log('response error handler', errorsHandler);

app.use(errorsHandler.responseErrorHandler);

module.exports = app;