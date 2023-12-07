const express = require('express');

const UserController = require('./controllers/UserController');
const ContactController = require('./controllers/ContactController');

// Middlewares
const loginRequired = require('./middlewares/loginRequired');

const routes = express.Router();

// User
routes.post('/users/register', UserController.create);
routes.post('/users/login', UserController.login);
routes.put('/users', loginRequired, UserController.update);
// Contacts
routes.post('/contacts', loginRequired, ContactController.create);
routes.get('/contacts', loginRequired, ContactController.show);

module.exports = routes;
