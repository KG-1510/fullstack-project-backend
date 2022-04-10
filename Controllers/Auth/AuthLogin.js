const express = require('express');
const StudentDB = require('../../Model/StudentData');
const { getUserData } = require('../../Utilities/JWT_Auth');
const Validate = require('../../Utilities/Validation');
exports.postLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const check = await Validate.checkLogin(req.body);
  if (check != true)
    return res.send({
      status: 400,
      message: 'Invalid input/too long/too short',
    });
  const token = await StudentDB.findOne({ email });

  const passwordRetrieved = await getUserData(token.password);
  console.log(passwordRetrieved + ' ----PR');
  console.log(password + ' ----P');
  if (passwordRetrieved === password) {
    console.log('same pass');
    res.send({ message: 'pass' });
  } else {
    res.status(404).send({ message: 'fail' });
  }
};
