const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('.');
const sequlize = new Sequalize('sqlite::memory');

    const Faculty = sequelize.define("faculty", {
      faculty_id: {
        type: DataTypes.INTEGER(16)
      },
      faculty_name: {
        type: DataTypes.ENUM ( 'FASS', 'Business', 'Computing', 'Dentistry', 'D&E', 
        'Duke-Nus Medical', 'Engineering','Law', 'Medicine',
        'Music', 'Public Health', 'Public Policy', 'LifeLong Education', 
        'Science', 'University Scholars Programme', 'Yale-Nus'),
      },
        tableName: 'faculty'
    });
    console.log(Faculty == sequelize.models.Faculty)
    return Faculty;