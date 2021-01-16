const express = require("express");
const router = express.Router();
const serviceCtrl = require("../controllers/services");

router.get("/services", serviceCtrl.showServices);
router.get("/services/:id", serviceCtrl.showOneService);
router.post("/services", serviceCtrl.createService);
router.delete("/services/:id", serviceCtrl.deleteService);
router.put("/services/:id", serviceCtrl.editService);

module.exports = router;
