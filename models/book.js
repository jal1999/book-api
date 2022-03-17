const db = require('../util/database');
const sequelize = require('sequelize');

const Book = db.define('book', {
   id: {
       type: sequelize.INTEGER,
       primaryKey: true,
       allowNull: false,
       autoIncrement: true
   },
    author: {
       type: sequelize.STRING,
        allowNull: false
    },
    title: {
       type: sequelize.STRING,
        allowNull: false
    }
});

module.exports = Book;