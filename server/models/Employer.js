module.exports = (sequelize, Sequelize) => {
    const Employer = sequelize.define("employer", {
        emp_name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        emp_salutation: {
            type: Sequelize.DataTypes.ENUM(
                "Mr.",
                "Mrs.",
                "Ms.",
                "Dr.",
                "Miss",
                "Prof."
            ),
            allowNull: false
        },
        emp_picture: {
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
        emp_linkedin: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        emp_company: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        emp_coRegNo: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
        },
        emp_coContact: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        emp_coEmail: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        emp_coAddress: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        emp_coCountry: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        emp_logo: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
        },
        emp_website: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
        },
        emp_coDes: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: false
        },
        emp_password: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        emp_new_applicants: {
            type: Sequelize.DataTypes.TINYINT
        },
        emp_max_applicants: {
            type: Sequelize.DataTypes.TINYINT
        },
        emp_news_letter: {
            type: Sequelize.DataTypes.TINYINT
        },
        emp_subscription: {
            type: Sequelize.DataTypes.TINYINT
        }
    });
    return Employer;
};
