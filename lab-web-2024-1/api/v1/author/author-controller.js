const Joi = require('joi');
const authorBusiness = require('./author-business');
const authorSchema = require('./author-schema');

const getAllAuthors = async (req, res) => {
  try {
    const authors = await authorBusiness.getAllAuthors();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAuthorById = async (req, res) => {
  try {
    const { error } = Joi.validate(req.params, authorSchema.getById.params);
    if (error) return res.status(400).json({ message: error.message });

    const author = await authorBusiness.getAuthorById(req.params.id);
    if (!author) return res.status(404).json({ message: 'Autor não encontrado' });
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAuthor = async (req, res) => {
  try {
    const { error } = Joi.validate(req.body, authorSchema.createAuthorSchema.payload);
    if (error) return res.status(400).json({ message: error.message });

    const author = await authorBusiness.createAuthor(req.body);
    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const { error } = Joi.validate(req.params, authorSchema.deleteById.params);
    if (error) return res.status(400).json({ message: error.message });

    await authorBusiness.deleteAuthor(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  deleteAuthor
};
