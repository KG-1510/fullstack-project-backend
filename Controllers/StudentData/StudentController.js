const express = require("express");
const StudentDB = require("../../Model/StudentData");
//save in cookies or body then fetch
const Fetch = async (req, res) => {
  // const Reqemail = req.body.email;
  const data = await StudentDB.findOne({ email: req.body.email });
  if (data != null) {
    console.log(data);
    res.send({ status: true, message: "Retrieval Successful", data });
  } else {
    res.status(404).send({ status: false, message: "Retrieval failed" });
  }
};
module.exports = Fetch;
