const { Earring } = require('../models/earring.model');

module.exports = {
    getAll: (request, response) => {
        Earring.find()
            .then(allEarrings => response.json(allEarrings))
            .catch(err => response.status(400).json(err));
    },

    getOne: (request, response) => {
        Earring.findById(request.params.id)
            .then(oneEarring => response.json(oneEarring))
            .catch(err => response.status(400).json(err));
    },

    create: (request, response) => {
        Earring.create(request.body)
            .then(newEarring => response.json(newEarring))
            .catch(err => response.status(400).json(err));
    },

    update: (request, response) => {
        Earring.findByIdAndUpdate(request.params.id, request.body, { new: true, runValidators: true })
            .then(updatedEarring => response.json(updatedEarring))
            .catch(err => response.status(400).json(err));
    },

    delete: (request, response) => {
        Earring.findByIdAndDelete(request.params.id)
            .then(earringToBeDeleted => response.json(earringToBeDeleted))
            .catch(err => response.status(400).json(err));
    }
}