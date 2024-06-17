const Sequelize = require('sequelize');
const database = require('../../../config/db');
const Author = require('../author/author-model');

const Book = database.sequelize.define('Book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    publishedDate: {
        type: Sequelize.DATE
    },
    isbn: {
        type: Sequelize.STRING
    },
    summary: {
        type: Sequelize.TEXT
    },
    authorId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'authors',
            key: 'id'
        }
    }
}, {
    timestamps: false,
    tableName: 'books'
});

Book.belongsTo(Author, { foreignKey: 'authorId' });

module.exports = Book;
