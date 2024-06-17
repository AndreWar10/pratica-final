const Joi = require("joi");

const createBook = {
    payload: Joi.object({
        // Defina os campos necessários para criar um livro
    })
};

const getById = {
    params: Joi.object({
        id: Joi.number().integer().required()
    })
}

const deleteById = {
    params: Joi.object({
        id: Joi.number().integer().required()
    })
}

const getBooks = {
    query: Joi.object({
        // Defina os parâmetros de consulta necessários para listar livros
    })
}

module.exports = {
    createBook,
    getById,
    deleteById,
    getBooks
};
