const express = require('express');
const route = express.Router();
const AuthLogin = require('../Controllers/Auth/AuthLogin');
const AuthRegister = require('../Controllers/Auth/AuthRegister');
route.post('/Login', AuthLogin.postLogin);

route.post('/Register', AuthRegister.postRegister);

module.exports = route;
