const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.faculty = require("./faculty.js")(sequelize, Sequelize);
db.students = require("../models/students.js")(sequelize, Sequelize);
db.employers = require("../models/employers.js")(sequelize, Sequelize);
db.adminAcc = require("../models/adminAcc.js")(sequelize, Sequelize);
db.jobPost = require("../models/jobPosts.js")(sequelize, Sequelize);

module.exports = db;