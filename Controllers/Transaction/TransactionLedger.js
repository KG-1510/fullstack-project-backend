const express = require("express");
const TransactionDB = require("../../Model/TransactionData");

const Fetch = async (req, res) => {
  const data = await TransactionDB.find({ email: req.body.email });
  if (data != null) {
    console.log(data);
    res.send({
      status: true,
      message: "Transaction Retrieval Successful",
      data,
    });
  } else {
    res.status(404).send({ status: false, message: "Retrieval failed" });
  }
};
module.exports = Fetch;
