const express = require("express");
//const mysql = require('mysql');
const TransactionRoutes = require("./routes/TransactionRoutes");
const AuthRoutes = require("./routes/Auth");
const connectDB = require("./Utilities/Database");
const dotenv = require("dotenv");
const StudentRoutes = require("./routes/StudentDetails");
//---------------------
const StudentUpdate = require("./routes/UpdateDetails");
//---------------------
const cors = require("cors");
const { connect } = require("./routes/TransactionRoutes");
dotenv.config({ path: "config.env" });
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("Home - Welcome to Feekart Backend");
});

//app.use('/transac', TransactionRoutes);
app.use("/", AuthRoutes);
app.use("/userprofile", StudentRoutes);
// -------------------------------
app.use("/updateprofile", StudentUpdate);
//--------------------------------
app.use("/transaction", TransactionRoutes);

app.listen(process.env.PORT || 3001, () => {
  console.log("✅ Server is started at port: 3001");
});
