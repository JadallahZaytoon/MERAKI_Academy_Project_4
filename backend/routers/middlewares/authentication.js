const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authentication = (req, res, next) => {
  try {
    if (!req.headers.authorization)
      return res.status(403).json({ message: 'forbidden' });

    const token = req.headers.authorization.split(' ').pop();
    const parsedToken = jwt.verify(token, process.env.SECRET);

    req.token = parsedToken;
    console.log(parsedToken);
    next();
  } catch (error) {
    res.status(403).json({ message: 'forbidden' });
  }
};

module.exports = authentication;

