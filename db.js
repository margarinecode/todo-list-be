// db.js
const { Sequelize } = require('sequelize');

// Initialize Sequelize with your MySQL configuration
const sequelize = new Sequelize('railway', 'root', 'sc6iOMJe2n7BO2q0JogP', {
    host: 'containers-us-west-95.railway.app',
    dialect: 'mysql',
    port: 5748
});

module.exports = sequelize;
