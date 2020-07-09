module.exports = (sequelize, Sequelize) => {
    const Application = sequelize.define("application", {
        applyDate: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false
        },
        status: {
            type: Sequelize.DataTypes.TINYINT,
        },
      });
      return Application;
    }