const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

//Database
const { Sequelize } = require('sequelize');

db = new Sequelize('Vocatio', 'root', 'Pass12345', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

//Test db
db.authenticate()
    .then(()=> console.log('Database Connected...'))
    .catch(err => console.log('Error: ' + err));

const app = express();

app.get('/', (req, res) => res.send('INDEX'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Server started on port ${PORT}'));
