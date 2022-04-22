const express = require("express");
const StudentDB = require("../../Model/StudentData");
//save in cookies or body then fetch
const Fetch = async (req, res) => {
  const filter = req.body.email;
  const update = res.body;
  const data = await StudentDB.findOneAndUpdate(filter, update, {
    new: true,
  });
  if (data != null) {
    console.log(data);
    res.send({ status: true, message: "Update Successful", data });
  } else {
    res.status(404).send({ status: false, message: "Update failed" });
  }
};
module.exports = Fetch;
