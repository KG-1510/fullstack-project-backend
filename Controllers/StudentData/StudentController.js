const express = require('express');
const res = require('express/lib/response');
const StudentData = require('../../Model/StudentData');
//const Reqemail=req.body.email;
//save in cookies or body then fetch
const Fetch = async (email) => {
  const studentdets = await StudentData.findOne({
    where: { email },
  });
  res.json(studentdets);
};
module.exports = Fetch;
