const express = require('express');
const StudentData = require('../../Model/StudentData');

exports.postLogin = async (req, res) => {
  const email = req.body.email;
  // const password = req.body.password;

  const data = await StudentData.findOne({ where: { email: email } });
  const password = data.password;
};
