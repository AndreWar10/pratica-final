const Sequelize = require('sequelize');
const database = require('../../../config/db');
const Book = require('../book/book-model');

const Author = database.sequelize.define('Author', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    biography: {
        type: Sequelize.TEXT
    },
    birthDate: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false,
    tableName: 'authors'
});

Author.hasMany(Book, { foreignKey: 'authorId' });

module.exports = Author;
