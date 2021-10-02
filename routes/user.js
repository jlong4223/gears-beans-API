const express = require("express");
const router = express.Router();
const { getUsers, getAdmin, signup, login } = require("../controllers/user");

router.get("/users", getUsers);
router.get("/admin", getAdmin);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
