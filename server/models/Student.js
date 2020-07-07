const Sequelize = require('sequelize');
const db = require('../config/database');

const Student = Sequelize.define("student", {
    stu_id: {
      type: Sequelize.DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.DataTypes.UUIDV4,
      allowNull:false
    },
    stu_name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    stu_mobile: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    stu_email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    stu_linkedin: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true
    },
    stu_password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    stu_status_change: {
      type: Sequelize.DataTypes.ENUM,
      values: ['t', 'f']
    },
    stu_new_jobs: {
      type: Sequelize.DataTypes.ENUM,
      values: ['t', 'f']
    },
    stu_news_letter: {
      type: Sequelize.DataTypes.ENUM,
      values: ['t', 'f']
    },
    stu_subscription: {
      type: Sequelize.DataTypes.ENUM,
      values: ['t', 'f']
    },
  })

  module.exports = Student;