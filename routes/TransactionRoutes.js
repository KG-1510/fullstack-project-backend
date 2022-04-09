const express = require('express');
const route = express.Router();
const TransactionGetController = require('../Controllers/Transaction/TransactionGet');
const TransactionPostController = require('../Controllers/Transaction/TransactionPost');
route.post('/get', TransactionGetController);

route.post('/pay', TransactionPostController);

module.exports = route;
