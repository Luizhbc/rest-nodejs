const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: 'user',
    host: 'localhost',
    port: 5432,
    database: 'Basico'
})

module.exports = db;