const express = require("express");
const route = express.Router();
const StudentUpdate = require("../Controllers/StudentData/StudentUpdate");
route.post("/", StudentUpdate);
module.exports = route;
