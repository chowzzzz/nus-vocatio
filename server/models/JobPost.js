module.exports = (sequelize, Sequelize) => {
  const Jobpost = sequelize.define("jobpost", {
      post_title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      post_short_des: {
        type: Sequelize.DataTypes.STRING(1234),
        allowNull: false
      },
      post_long_des: {
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
      post_status: {
        type: Sequelize.DataTypes.STRING,
      },
      post_expiry: {
        type: Sequelize.DataTypes.DATE,
      },
      post_industry: {
        type: Sequelize.DataTypes.STRING,
      },
      post_faculty: {
        type: Sequelize.DataTypes.STRING,
      },
      post_max_applicants: {
        type: Sequelize.DataTypes.INT,
      }
    });
    return Jobpost;
  }