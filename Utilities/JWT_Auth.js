const jwt = require('jsonwebtoken');

const GenerateJWT = function (data) {
  var user = { userData: data };
  payload = user;
  token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: '30d',
  });
  return token;
};
const getUserData = (token) => {
  return jwt.verify(token, process.env.TOKEN_SECRET).userData;
};
const verifyHeaderToken = () => {
  const token = req.headers.token;
  if (token.length < 1) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decode) => {
      JSON.stringify(decoded.userData);

      req.headers.userData = decoded.userData;
      next();
    });
  }
};
module.exports = {
  GenerateJWT,
  getUserData,
  verifyHeaderToken,
};
