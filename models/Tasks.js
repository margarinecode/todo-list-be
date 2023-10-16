// models/Tasks.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Import your Sequelize instance

const Tasks = sequelize.define('Tasks', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = Tasks;
