const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    req.auth = { userId };
    /*
      verif droits utilisateur
    */
    next();
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};
