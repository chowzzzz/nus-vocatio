const Sequelize = require('sequelize');

const db = new Sequelize('sql12352722', 'sql12352722', 'YxZJk1M6Xf', {
    host: 'sql12.freemysqlhosting.net',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

//Models
db.student = require('../models/Student')(sequelize, Sequelize);
/*
db.faculty = require('../models/Faculty')(sequelize, Sequelize);

db.employers = require('../models/Employer')(sequelize, Sequelize);
db.adminAcc = require('../models/AdminAcc')(sequelize, Sequelize);
db.jobPosts = require('../models/JobPost')(sequelize, Sequelize);
*/
module.exports = db;