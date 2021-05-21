const authorController = require('../controllers/authors.controller');

module.exports = (app) => {
    app.post('/api/authors', authorController.create);
    app.get('/api/authors', authorController.findAll);
    app.get('/api/authors/:id', authorController.findOne);
    app.put('/api/authors/:id', authorController.updateAuthor);
    app.delete('/api/authors/:id', authorController.deleteAuthor);
};