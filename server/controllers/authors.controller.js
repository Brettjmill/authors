const Author = require('../models/authors.model');

module.exports = {

    create: function (req,res) {
        console.log('create method executed');

        Author.create(req.body)
            .then((author) => {
                res.json(author);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    findAll: function (req, res) {
        console.log('find all method executed');

        Author.find()
            .then((authors) => {
                res.json(authors);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    findOne: function (req, res) {
        console.log('find one method executed', 'url params:', req.params);

        Author.findById(req.params.id)
            .then((author) => {
                res.json(author);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    updateAuthor: function (req, res) {
        console.log('update author method executed', 'url params:', req.params);

        Author.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true
        })
            .then((author) => {
                res.json(author);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    deleteAuthor: function (req, res) {
        console.log('delete author method executed', 'url params:', req.params);

        Author.findByIdAndDelete(req.params.id)
            .then ((author) => {
                res.json(author);
            })
            .catch ((err) => {
                res.status(400).json(err);
            }); 
        
    }
};