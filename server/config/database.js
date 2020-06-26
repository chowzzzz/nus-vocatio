const Sequelize = require('sequelize');

const db = new Sequelize('vocatio', 'root', 'Pass12345', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

/*Models
db.faculty = require('../models/Faculty')(sequelize, Sequelize);
db.students = require('../models/Students')(sequelize, Sequelize);
db.employers = require('../models/Employers')(sequelize, Sequelize);
db.adminAcc = require('../models/AdminAcc')(sequelize, Sequelize);
db.jobPosts = require('../models/JobPosts')(sequelize, Sequelize);
*/
module.exports = db;