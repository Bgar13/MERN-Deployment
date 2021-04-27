const PetController = require('../controllers/pet.controllers');

module.exports = function(app){
    app.get('/api/pets', PetController.getAll);
    app.post('/api/pets', PetController.create);
    app.get('/api/pets/:id', PetController.getOne);
    app.put('/api/pets/:id', PetController.update);
    app.delete('/api/pets/:id', PetController.delete);
}