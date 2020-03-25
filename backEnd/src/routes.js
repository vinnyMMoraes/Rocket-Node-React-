const express = require('express');
const connection = require('./database/connection')

const OngController= require('./Controllers/OngControllers')
const IncidentController= require('./Controllers/IncidentController')
const ProfileController= require('./Controllers/ProfileController')
const SessionController= require('./Controllers/SessionController')

const routes = express.Router();
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile',ProfileController.index);

 routes.post('/incidents', IncidentController.create);
 routes.get('/incidents', IncidentController.index);
 routes.delete('/incidents/:id',IncidentController.delete);

 routes.post('/Session/', SessionController.create)

module.exports = routes;