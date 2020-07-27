module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
        stu_id: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: "Student ID already registered"
            }
        },
        stu_name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        stu_dob: {
            type: Sequelize.DataTypes.DATEONLY,
            allowNull: false
        },
        stu_picture: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
        },
        stu_mobile: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        stu_email: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            },
            unique: {
                args: true,
                msg: "Email address already in use"
            }
        },
        stu_faculty: {
            type: Sequelize.DataTypes.ENUM(
                "FASS",
                "Business",
                "Computing",
                "Dentistry",
                "Design and Environment",
                "Duke-NUS Medical School",
                "Engineering",
                "Law",
                "Medicine",
                "Music",
                "Public Health",
                "Public Policy",
                "School of Continuing and Lifelong Education",
                "Science",
                "University Scholars Programme",
                "Yale-NUS"
            ),
            allowNull: false
        },
        stu_degree: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        stu_year: {
            type: Sequelize.DataTypes.TINYINT(1),
            allowNull: false
        },
        stu_linkedin: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
        },
        stu_resume: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
        },
        stu_password: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        stu_status_change: {
            type: Sequelize.DataTypes.BOOLEAN,
            allowNull: false
        },
        stu_new_jobs: {
            type: Sequelize.DataTypes.BOOLEAN,
            allowNull: false
        },
        stu_news_letter: {
            type: Sequelize.DataTypes.BOOLEAN,
            allowNull: false
        },
        stu_subscription: {
            type: Sequelize.DataTypes.BOOLEAN,
            allowNull: false
        }
    });
    return Student;
};
