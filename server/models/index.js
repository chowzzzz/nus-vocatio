const dbConfig = require("../config/database.js");

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

db.student = require("./Student.js")(sequelize, Sequelize);
db.admin = require("./Admin.js")(sequelize, Sequelize);
db.employer = require("./Employer.js")(sequelize, Sequelize);
db.jobpost = require("./Jobpost.js")(sequelize, Sequelize);
db.faculty = require("./Faculty.js")(sequelize, Sequelize);
db.application = require("./Applications.js")(sequelize, Sequelize);

module.exports = db;