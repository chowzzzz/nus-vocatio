const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('.');
const sequlize = new Sequalize('sqlite::memory');

const Employers = sequelize.define("employers", {
    emp_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false
    },
    emp_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    emp_mobile: {
      type: DataTypes.STRING,
      allowNull: false
    },
    emp_email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    emp_company: {
      type: DataTypes.STRING,
      allowNull: false
    },
    emp_logo: {
      type: DataTypes.BLOB('medium'),
      allowNull: true
    },
    emp_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    emp_new_applicants: {
      type: DataTypes.ENUM,
      values: ['t', 'f']
    },
    emp_max_applicants: {
      type: DataTypes.ENUM,
      values: ['t', 'f']
    },
    emp_news_letter: {
      type: DataTypes.ENUM,
      values: ['t', 'f']
    },
    emp_subscription: {
      type: DataTypes.ENUM,
      values: ['t', 'f']
    },
  })
  console.log(Employers == sequelize.models.Employers)
  return Employers;