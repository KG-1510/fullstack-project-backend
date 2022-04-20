const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TransactionData = new Schema({
  rzp_id: {
    type: String,
    unique: true,
  },
  txn_name: {
    type: String,
    required: true,
  },
  dates: {
    paid: { type: Date, default: Date.now },
  },
  amount: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("TransactionDB", TransactionData);
