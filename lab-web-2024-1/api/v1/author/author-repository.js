const Author = require('./author-model');
const Book = require('../book/book-model');
const { Op } = require('sequelize');

const save = async (author) => {
    return Author.create(author);
};

const findAll = async (filter) => {
    const { name } = filter;
    return Author.findAll({
        where: {
            ...(name) ? { name: { [Op.iLike]: `${name}%` } } : {}
        }
    });
};

const findById = async (id) => {
    return Author.findOne({
        where: { id }
    });
};

const deleteById = async (id) => {
    try {
        // Verificar se o autor está relacionado a algum livro
        const author = await Author.findByPk(id, { include: Book });

        if (!author) {
            throw new Error('Autor não encontrado.');
        }

        if (author.Books && author.Books.length > 0) {
            throw new Error('Não é possível excluir este autor porque ele está relacionado a um livro.');
        }

        // Se não houver livros relacionados, exclua o autor
        await Author.destroy({ where: { id } });

        return { success: true, message: 'Autor excluído com sucesso.' };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

module.exports = {
    save,
    findAll,
    findById,
    deleteById
};
