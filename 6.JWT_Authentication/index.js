const jwt = require("jsonwebtoken");
const secretKey = 'abcde12345';

//create token
const token = jwt.sign({
  id:1,
  username:"abhishek",
},
secretKey,
{expiresIn:'1h'}
);

console.log(token);

//verify token
 jwt.verify(token, 'abcde12345', (err, decoded) => {
    if (err) {
      console.log('Token is invalid');
    } else {
      console.log('Decoded Token:', decoded);
    }
  });