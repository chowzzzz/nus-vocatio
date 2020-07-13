<<<<<<< HEAD
const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
const Student = Sequelize.define("student", {
    stu_id: {
      type: Sequelize.DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.DataTypes.UUIDV4,
      allowNull:false
    },
    stu_name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    stu_mobile: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    stu_email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    stu_linkedin: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true
    },
    stu_password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    stu_status_change: {
      type: Sequelize.DataTypes.ENUM,
      values: ['t', 'f']
    },
    stu_new_jobs: {
      type: Sequelize.DataTypes.ENUM,
      values: ['t', 'f']
    },
    stu_news_letter: {
      type: Sequelize.DataTypes.ENUM,
      values: ['t', 'f']
    },
    stu_subscription: {
      type: Sequelize.DataTypes.ENUM,
      values: ['t', 'f']
    }
  });

  return Student;
};
=======
module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("student", {
      stu_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      stu_mobile: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      stu_email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      stu_linkedin: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
      stu_password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      stu_status_change: {
        type: Sequelize.DataTypes.TINYINT,
        allowNull: true
      },
      stu_new_jobs: {
        type: Sequelize.DataTypes.TINYINT,
        allowNull: true
      },
      stu_news_letter: {
        type: Sequelize.DataTypes.TINYINT,
        allowNull: true
      },
      stu_subscription: {
        type: Sequelize.DataTypes.TINYINT,
        allowNull: true
      },
    });
      return Student;
    };
>>>>>>> 62ab031009d2b7a4b82fb65303948d4721e9911c
