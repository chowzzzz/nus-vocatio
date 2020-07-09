module.exports = (sequelize, Sequelize) => {
    const Faculty = sequelize.define("faculty", {
      faculty_name: {
        type: Sequelize.DataTypes.STRING,
    }
  });
    return Faculty;
  }