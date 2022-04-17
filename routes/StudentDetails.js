const express = require('express');
const route = express.Router();
const StudentController = require('../Controllers/StudentData/StudentController');
route.post('/', StudentController);
module.exports = route;
