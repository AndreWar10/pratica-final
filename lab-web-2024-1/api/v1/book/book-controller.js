const business = require('./book-business');

const getBooks = async (request, h) => {
    const { query } = request;
    const result = await business.list(query);
    return h.response(result).code(200);
};

const create = async (request, h) => {
    const { payload } = request;
    try {
        const result = await business.create(payload);
        return h.response(result).code(201);
    } catch (error) {
        console.log(error);
    }
};

const findById = async (request, h) => {
    const bookId = request.params.id;
    return h.response(await business.findById(bookId));
};

const deleteById = async (request, h) => {
    const bookId = request.params.id;
    try {
        await business.deleteById(bookId);
        return h.response({}).code(204);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getBooks,
    create,
    findById,
    deleteById
};
