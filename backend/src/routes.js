const express = require('express');

const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const IncidentsController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.getAll);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.getAll);

routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.getAll);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;