const express = require("express");
const route = express.Router();
const TransactionOrderIdController = require("../Controllers/Transaction/TransactionOrderId");
const LedgerController = require("../Controllers/Transaction/TransactionLedger");

route.post("/rzpOrderId", TransactionOrderIdController);
route.post("/ledger", LedgerController);

module.exports = route;
