const bookModel = require('./book-model');
const { Op } = require('sequelize');
const Author = require('../author/author-model');

const save = async (book) => {
    return bookModel.create(book);
};

const findAll = async (filter) => {
    const { title, 'author.name': authorName } = filter;
    return bookModel.findAll({
        include: [{
            model: Author,
            required: true // inner join
        }],
        where: {
            ...(title) ? { title: { [Op.iLike]: `${title}%` } } : {},
            ...(authorName) ? { '$Author.name$': { [Op.iLike]: `${authorName}%` } } : {}
        }
    });
};

const findById = async (id) => {
    return bookModel.findOne({
        include: [{
            model: Author,
            required: false // left join
        }],
        where: { id }
    });
};

const deleteById = async (id) => {
    bookModel.destroy({
        where: { id }
    });
};

module.exports = {
    save,
    findAll,
    findById,
    deleteById
};
