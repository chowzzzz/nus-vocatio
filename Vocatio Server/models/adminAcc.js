const Sequelize = require('sequelize');
const db = require('../config/database');

const AdminAcc = sequelize.define("adminAcc", {
    adm_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false
    },
    adm_user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    adm_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  })
  console.log(AdminAcc == sequelize.models.AdminAcc)
  return AdminAcc;