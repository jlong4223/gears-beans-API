const express = require("express");
const router = express.Router();
const serviceCtrl = require("../controllers/services");

router.get("/services", serviceCtrl.showServices);
router.post("/services", serviceCtrl.createService);

module.exports = router;
