const { Sequelize } = require('sequelize');

const db = new Sequelize('books', 'root', '5477Kiss', { dialect: 'mysql', host: 'localhost' });

module.exports = db;