module.exports = (sequelize, Sequelize) => {
    const Application = sequelize.define("application", {
        applyDate: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false
        },
        /*
         * 1. ACCEPTED
         * 2. PENDING
         * 3. REJECTED
         */
        status: {
            type: Sequelize.DataTypes.TINYINT
        }
    });
    return Application;
};
