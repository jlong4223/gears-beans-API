const User = require("../models/user");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  getUsers,
  getAdmin,
};

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();

    // Send back a JWT and the user
    const token = createJWT(user);
    res.json({ token, user });
  } catch (err) {
    console.log(err);
    res.status(400).json({ signup_err: err });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(401).json({ err: "bad credentials" });

    user.comparePassword(password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token, user });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json(err);
  }
}

function createJWT(user) {
  return jwt.sign(
    { user }, //data payload
    SECRET,
    { expiresIn: "60d" }
  );
}

async function getUsers(req, res) {
  const user = await User.find({});

  if (!user) return res.status(404).json({ err: "No users found" });

  res.json(user);
}

async function getAdmin(req, res) {
  const user = await User.find({ admin: true });
  res.json(user);
}
