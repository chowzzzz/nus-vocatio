const Faculty = require("./Faculty")

module.exports = (sequelize, Sequelize) => {
  const JobPost = sequelize.define("jobpost", {
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
    });
    return Faculty
  }