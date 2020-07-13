<<<<<<< HEAD
const Sequelize = require('sequelize');

const db = new Sequelize('sql12352722', 'sql12352722', 'YxZJk1M6Xf', {
    host: 'sql12.freemysqlhosting.net',
=======
module.exports = {
    HOST: 'sql12.freemysqlhosting.net',
    USER:'sql12352722',
    PASSWORD: 'YxZJk1M6Xf',
    DB: 'sql12352722',
>>>>>>> 62ab031009d2b7a4b82fb65303948d4721e9911c
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};