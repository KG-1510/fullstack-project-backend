const express = require('express');
const StudentData = require('../../Model/StudentData');
const { getUserData } = require('../../Utilities/JWT_Auth');
exports.postLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  //const data = await StudentData.findOne({ where: { email: email } });
  //send mail to db, fetch the token, then token passed to the function bel;ow, this decodes to the pass. then check equality.
  const token = req.body.token;
  const passwordRetrieved = await getUserData(token);
  console.log(passwordRetrieved);
  res.json({ passwordRetrieved });
};
