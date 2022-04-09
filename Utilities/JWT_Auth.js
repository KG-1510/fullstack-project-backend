const jwt = require('jsonwebtoken');

const GenerateJWT = function (data) {
  var user = { userData: data };
  payload = user;
  console.log(user);
  token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: '30d',
  });
  console.log(token);
  return token;
};
const getUserData = async (token) => {
  console.log(token + 'is the token');
  const passVerified = jwt.verify(token, process.env.TOKEN_SECRET).userData;
  console.log(passVerified + ' getUserData');
  return passVerified;

  //   (err, decode) => {
  //   console.log(decode.userData + ' is the pass');
  //   return decode.userData;
  // }
};
// const verifyHeaderToken = () => {
//   const token = req.headers.token;
//   if (token.length > 1) {
//     jwt.verify(token, process.env.TOKEN_SECRET, (err, decode) => {
//       JSON.stringify(decoded.userData);

//       req.headers.userData = decoded.userData;
//       next();
//     });
//   }
// };
module.exports = {
  GenerateJWT,
  getUserData,
  // verifyHeaderToken,
};
