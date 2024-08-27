const mongoose = require('mongoose');


const dbConfig = require('../dbConfig/dbConfig').production;

let dbUrl;

if (dbConfig.PROTOCOL === 'mongodb') {
    dbUrl = `${dbConfig.PROTOCOL}://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DATABASE}`;
} else {
    dbUrl = `${dbConfig.PROTOCOL}://${dbConfig.USER}:${dbConfig.PASSWORD}@${dbConfig.HOST}/${dbConfig.DATABASE}?retryWrites=true&w=majority`;
}

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB', dbUrl))
    .catch((err) => console.error('Error connecting to MongoDB:', err));



module.exports = mongoose; // Ensure this line exports mongoose correctly
