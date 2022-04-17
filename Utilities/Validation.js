const validator = require("fastest-validator");

const checkRegister = (data) => {
  const v = new validator();

  const schema = {
    name: {
      type: "string",
      required: true,
      max: 256,
    },
    email: {
      type: "string",
      required: true,
      max: 256,
    },
    password: {
      type: "string",
      required: true,
      max: 1024,
      min: 6,
    },
    image: {
      type: "string",
    },
    year: {
      type: "string",
      required: true,
    },
    branch: {
      type: "string",
      required: true,
    },
    spl: {
      type: "string",
      required: true,
    },
  };

  const check = v.compile(schema);

  return check(data);
};

const checkLogin = (data) => {
  const v = new validator();

  const schema = {
    email: {
      type: "string",
      required: true,
      max: 256,
    },
    password: {
      type: "string",
      required: true,
      max: 1024,
      min: 6,
    },
  };
  const check = v.compile(schema);
  return check(data);
};
module.exports = {
  checkLogin,
  checkRegister,
};
