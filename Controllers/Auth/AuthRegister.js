const express = require('express');
const StudentDB = require('../../Model/StudentData');
const Validate = require('../../Utilities/Validation');
const { GenerateJWT } = require('../../Utilities/JWT_Auth');
exports.postRegister = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  // const image = req.body.image;
  // const year = req.body.year;
  // const branch = req.body.branch;
  // const spl = req.body.spl;
  const token = await GenerateJWT(password);
  const check = await Validate.checkRegister(req.body);
  if (check != true)
    return res.send({
      status: 400,
      message: 'Invalid input/too long/too short',
    });

  // res.json({ token: token });
  let user;
  try {
    const emailExists = await StudentDB.findOne({ name });
    if (emailExists)
      return res.send({ status: 400, message: 'Username already exists.' });
  } catch (err) {
    res.status(400).send('some error while sending to db');
  }
  user = new StudentDB({
    name,
    email,
    password: token,
    // image,
    // year,
    // branch,
    // spl,
  });
  user.save().then(() => {
    console.log('saved');
    res.send({ status: 'success', message: 'saved successfully' });
  });

  //console.log(user + 'is the user');
};
