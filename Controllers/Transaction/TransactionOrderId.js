const shortid = require("shortid");
const Razorpay = require("razorpay");
const transactionDB = require("../../Model/TransactionData");
const studentDB = require("../../Model/StudentData");

const TransactionOrderIdController = async (req, res, next) => {
  const KEY_ID = process.env.RAZORPAY_KEY_ID;
  const KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

  const razorpay = new Razorpay({
    key_id: KEY_ID,
    key_secret: KEY_SECRET,
  });

  const payment_capture = 1;
  const txn_name = req.body.txn_name;
  const txn_id = req.body.txn_id;
  const amount = req.body.amount;
  const email = req.body.email;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);

    studentDB
      .findOneAndUpdate({ email }, { $push: { paid_txn: txn_id } })
      .then(() => {
        console.log("Transaction added to student DB");
      });

    let transaction;

    transaction = new transactionDB({
      receipt: response.receipt,
      order_id: response.id,
      amount: amount,
      txn_name: txn_name,
      email: email,
    });

    // transaction.save().then(() => {
    //   console.log("Transaction Added to DB Successfully!");
    // });
    transaction.save(function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        console.log("Transaction Added to DB Successfully!");
      }
    });

    console.log(transaction);

    res.json({
      status: true,
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    res.status(404).json({ status: false });
  }
};
module.exports = TransactionOrderIdController;
