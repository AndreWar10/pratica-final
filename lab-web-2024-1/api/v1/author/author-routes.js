const { getAuthors, create, findById, deleteById } = require('./author-controller');
const schema = require('./author-schema');

const plugin = {
    name: 'author-v1-route',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: "GET",
                path: "/v1/authors",
                options: {
                    tags: ['api'],
                    description: 'List of authors',
                    handler: getAuthors,
                    validate: schema.getAuthors
                }
            },
            {
                method: "GET",
                path: "/v1/authors/{id}",
                options: {
                    tags: ['api'],
                    description: 'Get author by ID',
                    handler: findById,
                    validate: schema.getById
                }
            },
            {
                method: "POST",
                path: "/v1/authors",
                options: {
                    tags: ['api'],
                    handler: create,
                    validate: schema.createAuthorSchema
                }
            },
            {
                method: "DELETE",
                path: "/v1/authors/{id}",
                options: {
                    tags: ['api'],
                    handler: deleteById,
                    validate: schema.deleteById
                }
            },
        ]);
    }
};

module.exports = plugin;
