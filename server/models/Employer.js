module.exports = (sequelize, Sequelize) => {
  const Employer = sequelize.define("employer", {
      emp_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      emp_mobile: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      emp_email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      emp_company: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      emp_logo: {
        type: Sequelize.DataTypes.BLOB('medium'),
        allowNull: true
      },
      emp_password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      emp_new_applicants: {
        type: Sequelize.DataTypes.TINYINT,
      },
      emp_max_applicants: {
        type: Sequelize.DataTypes.TINYINT,
      },
      emp_news_letter: {
        type: Sequelize.DataTypes.TINYINT,
      },
      emp_subscription: {
        type: Sequelize.DataTypes.TINYINT,
      },
    })
    return Employer;
  }