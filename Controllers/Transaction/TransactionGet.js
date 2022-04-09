const express = require('express');

const TransactionGetController = async (req, res, next) => {
  const { details } = req.body;
  console.log(details);
  res.send('details got');
};
module.exports = TransactionGetController;
