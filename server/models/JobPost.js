module.exports = (sequelize, Sequelize) => {
    const Jobpost = sequelize.define("jobpost", {
        post_title: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        post_short_des: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: false
        },
        post_long_des: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: false
        },
        post_requirements: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: false
        },
        post_type: {
            type: Sequelize.DataTypes.ENUM(
                "Internship",
                "Part-time",
                "Research studies",
                "Surveys"
            )
        },
        post_pay: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
        },
        post_status: {
            type: Sequelize.DataTypes.TINYINT(1)
        },
        post_expiry: {
            type: Sequelize.DataTypes.DATE
        },
        post_industry: {
            type: Sequelize.DataTypes.ENUM(
                "Aerospace",
                "Consumer Business",
                "Creative Industries",
                "Education",
                "Energy & Chemicals",
                "Engineering",
                "Healthcare",
                "Information & Communications Technology",
                "Logistics & Supply Chain Management",
                "Oil & Gas Equipment and Services",
                "Medical Technology",
                "Natural Resources",
                "Pharmaceuticals and Biotechnology",
                "Professional Services",
                "Transport",
                "Urban Solutions & Sustainability",
                "Others"
            )
        },
        post_faculty: {
            type: Sequelize.DataTypes.ENUM(
                "All",
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
            )
        },
        post_max_applicants: {
            type: Sequelize.DataTypes.INTEGER
        }
    });
    return Jobpost;
};
