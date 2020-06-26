const Sequelize = require('sequelize');
const db = require('../config/database');

const AdminAcc = db.define("adminAcc", {
    adm_id: {
      type: Sequelize.DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.DataTypes.UUIDV4,
      allowNull:false
    },
    adm_user: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    adm_password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
  })
  
  module.exports = db;