const express = require('express');
const StudentDB = require('../../Model/StudentData');
const { getUserData } = require('../../Utilities/JWT_Auth');
exports.postLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const token = await StudentDB.findOne({ where: { email } });

  const passwordRetrieved = await getUserData(token.password);
  if (passwordRetrieved === password) {
    console.log('same pass');
    res.send('pass');
  } else {
    res.send('fail');
  }
};
