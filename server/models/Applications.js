module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
        applyDate: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false
        },
        status: {
            type: Sequelize.DataTypes.TINYINT,
        },
      });
      return Admin;
    }