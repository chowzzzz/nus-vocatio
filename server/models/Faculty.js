module.exports = (sequelize, Sequelize) => {
    const Faculty = sequelize.define("faculty", {
      faculty_id: {
        type: Sequelize.DataTypes.UUIDV4,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull:false
      },
      faculty_name: {
        type: Sequelize.ENUM ( 'FASS', 'Business', 'Computing', 'Dentistry', 'D&E', 
        'Duke-Nus Medical', 'Engineering','Law', 'Medicine',
        'Music', 'Public Health', 'Public Policy', 'LifeLong Education', 
        'Science', 'University Scholars Programme', 'Yale-Nus'),
      },
        tableName: 'faculty'
    });
    return Faculty;
  }