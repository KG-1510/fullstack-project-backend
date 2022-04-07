const express = require("express");
const mysql = require("mysql");

const app = express();

app.get("/transactions", (req, res) => {
    res.send("Transaction GET")
});

app.listen(3001, () => {
  console.log("✅ Server is started at port: 3001");
});
