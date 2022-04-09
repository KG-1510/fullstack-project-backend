const express = require('express');

const TransactionPostController = async (req, res, next) => {
  res.send('get transaction');
};
module.exports = TransactionPostController;
