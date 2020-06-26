const Sequelize = require('sequelize');
const db = require('../config/database');

const JobPost = db.define("jobPost", {
    post_id: {
      type: Sequelize.DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.DataTypes.UUIDV4,
      allowNull:false
    },
    post_title: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    post_description: {
      type: Sequelize.DataTypes.STRING(1234),
      allowNull: false
    },
    post_requirements: {
        type: Sequelize.DataTypes.STRING(1234),
        allowNull: false
    },
    post_pay: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
  })
  module.exports = JobPost;