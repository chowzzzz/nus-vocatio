const { Sequelize } = require('sequelize');

module.export = new Sequelize('Vocatio', 'root', 'Pass12345', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});