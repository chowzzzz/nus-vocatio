const Sequelize = require('sequelize');
const db = require('../config/database');

const Employer = db.define("employer", {
    emp_id: {
      type: Sequelize.DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.DataTypes.UUIDV4,
      allowNull:false
    },
    emp_name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    emp_mobile: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    emp_email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    emp_company: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    emp_logo: {
      type: Sequelize.DataTypes.BLOB('medium'),
      allowNull: true
    },
    emp_password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    emp_new_applicants: {
      type: Sequelize.DataTypes.ENUM,
      values: ['t', 'f']
    },
    emp_max_applicants: {
      type: Sequelize.DataTypes.ENUM,
      values: ['t', 'f']
    },
    emp_news_letter: {
      type: Sequelize.DataTypes.ENUM,
      values: ['t', 'f']
    },
    emp_subscription: {
      type: Sequelize.DataTypes.ENUM,
      values: ['t', 'f']
    },
  })
  module.exports = db;