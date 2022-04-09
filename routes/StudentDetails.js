const express = require('express');
const route = express.Router();
const StudentController = require('../Controllers/StudentData/StudentController');
route.get('/', StudentController);
module.exports = route;
