const mongoose = require('mongoose');
const env = process.env.NODE_ENV ?? 'development';
const config = require('./../config/db')[env];

mongoose.connect(`mongodb://${config.host}:${config.port}/${config.dbName}`)
        .then(() => console.log('\nConnected to database\n'))
        .catch(error => console.log(error));

module.exports.Phone = require('./phone');