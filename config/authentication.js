const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

module.exports = function (req, res, next) {
  let token = req.get("Authorization") || req.query.token || req.body.token;

  if (token) {
    // Remove the 'Bearer ' if it was included in the token header
    token = token.replace("Bearer ", "");

    jwt.verify(token, SECRET, function (err, decoded) {
      if (err) {
        next(err);
      }

      const verifiedUser = jwt.verify(token, SECRET);
      req.user = verifiedUser;
      next();
    });
  } else {
    next();
  }
};
