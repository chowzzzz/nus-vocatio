const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('.');
const sequlize = new Sequalize('sqlite::memory');

const Students = sequelize.define("students", {
    stu_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false
    },
    stu_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stu_mobile: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stu_email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stu_linkedin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    stu_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stu_status_change: {
      type: DataTypes.ENUM,
      values: ['t', 'f']
    },
    stu_new_jobs: {
      type: DataTypes.ENUM,
      values: ['t', 'f']
    },
    stu_news_letter: {
      type: DataTypes.ENUM,
      values: ['t', 'f']
    },
    stu_subscription: {
      type: DataTypes.ENUM,
      values: ['t', 'f']
    },
  })
  Student.hasOne(faculty);
  console.log(Students == sequelize.models.Students)
  return Students;