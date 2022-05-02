const EarringController = require('../controllers/earring.controller');

module.exports = (app) => {
    app.get('/api/earring', EarringController.getAll);
    app.post('/api/earring', EarringController.create);
    app.put('/api/earring/:id', EarringController.update);
    app.get('/api/earring/:id', EarringController.getOne);
    app.delete('/api/earring/:id', EarringController.delete);
}   