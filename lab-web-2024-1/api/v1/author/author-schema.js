const Joi = require("joi");

const createAuthorSchema = {
    payload: Joi.object({
        name: Joi.string().min(3).max(60).required(),
        biography: Joi.string(),
        birthDate: Joi.date()
    })
};

const getById = {
    params: Joi.object({
        id: Joi.number().integer().required()
    })
};

const deleteById = {
    params: Joi.object({
        id: Joi.number().integer().required()
    })
};

const getAuthors = {
    query: Joi.object({
        name: Joi.string().min(1)
    })
};

module.exports = {
    createAuthorSchema,
    getById,
    getAuthors,
    deleteById
};
