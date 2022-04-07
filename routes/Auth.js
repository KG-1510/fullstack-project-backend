const express = require('express');
const route = express.Router();
const AuthLogin = require('../Controllers/Auth/AuthLogin');
const AuthRegister = require('../Controllers/Auth/AuthRegister');
route.get('/login', AuthLogin);

route.post('/register', AuthRegister);

module.exports = route;
