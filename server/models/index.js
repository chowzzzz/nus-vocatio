const dbConfig = require("../config/database.js");
//DB
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

//Models
db.student = require("./Student.js")(sequelize, Sequelize);
db.admin = require("./Admin.js")(sequelize, Sequelize);
db.employer = require("./Employer.js")(sequelize, Sequelize);
db.jobpost = require("./Jobpost.js")(sequelize, Sequelize);
db.faculty = require("./Faculty.js")(sequelize, Sequelize);
db.application = require("./Applications.js")(sequelize, Sequelize);

//Relations
//One - to - many
db.employer.hasMany(db.jobpost, { as: "jobpost"});
db.jobpost.belongsTo(db.employer, {
  foreignKey: "employerId",
  as: "employer",
});

db.student.hasMany(db.application, { as: "application"});
db.application.belongsTo(db.student, {
  foreignKey: "studentId",
  as: 'student',
});

db.jobpost.hasMany(db.application, { as: "applications"});
db.application.belongsTo(db.jobpost, {
  foreignKey: "jobpostId",
  as: "jobpost",
});

/*Many - to - many
db.jobpost.belongsToMany(db.faculty, {
  through: "faculty_jobpost",
  as: "faculties",
  foreignKey: "faculty_id",
});
db.faculty.belongsToMany(db.jobpost, {
  through: "faculty_jobpost",
  as: "jobposts",
  foreignKey: "jobpost_id",
});
*/


module.exports = db;