function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

function checkUserId(req, res, next) {
  const { _id } = req.user.user;
  const { createdBy } = req.body;

  if (_id !== createdBy) {
    return res.status(401).json({ msg: "Not Authorized" });
  }

  return next();
}

function checkAdmin(req, res, next) {
  const { role } = req.user.user;

  if (role !== "super-admin") {
    return res.status(401).json({ msg: "Not Authorized" });
  }

  return next();
}

module.exports = { checkAuth, checkUserId, checkAdmin };
