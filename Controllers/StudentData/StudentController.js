const express = require('express');
const res = require('express/lib/response');
const StudentDB = require('../../Model/StudentData');
//const Reqemail=req.body.email;
//save in cookies or body then fetch
const Fetch = async (email) => {
  const data = await StudentDB.findOne({ email });
  console.log(data);
  res.send({ data });
};
module.exports = Fetch;
