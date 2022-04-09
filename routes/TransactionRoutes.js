const express = require('express');
const route = express.Router();
const TransactionGetController = require('../Controllers/Transaction/TransactionGet');
const TransactionPostController = require('../Controllers/Transaction/TransactionPost');
route.get('/transactions', TransactionGetController);

route.post('/transactionspay', TransactionPostController);

module.exports = route;
