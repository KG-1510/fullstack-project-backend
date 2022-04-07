const express = require('express');
const StudentData = require('../../Model/StudentData');

exports.postRegister = async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const image = req.body.image;
  const year = req.body.year;
  const branch = req.body.branch;
  const spl = req.body.spl;

  await StudentData.create({
    id,
    name,
    email,
    password,
    image,
    year,
    branch,
    spl,
  });
};
