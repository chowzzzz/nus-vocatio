const Sequelize = require('sequelize');
const db = require('../config/database');

const JobPost = sequelize.define("jobPost", {
    post_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_description: {
      type: DataTypes.STRING(1234),
      allowNull: false
    },
    post_requirements: {
        type: DataTypes.STRING(1234),
        allowNull: false
    },
    post_pay: {
        type: DataTypes.STRING,
        allowNull: false
    },
  })
  JobPost.hasOne(employers);
  JobPost.hasOne(faculty);
  console.log(AdminAcc == sequelize.models.AdminAcc)
  return AdminAcc;