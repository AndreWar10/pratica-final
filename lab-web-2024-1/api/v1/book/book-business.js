const repository = require('./book-repository');

const create = async (book) => {
    // Lógica de negócio
    return repository.save(book);
};

const list = async (filter) => {
    return repository.findAll(filter);
};

const findById = async (id) => {
    return repository.findById(id);
};

const deleteById = async (id) => {
    repository.deleteById(id);
};

module.exports = {
    create,
    list,
    findById,
    deleteById
};
