module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define("admin", {
      adm_user: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      adm_password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
    });
    return Admin;
  }