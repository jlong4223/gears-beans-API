const express = require("express");
const router = express.Router();
const serviceCtrl = require("../controllers/services");
const { checkAdmin } = require("../middleware/authentication");

router.get("/services", serviceCtrl.showServices);
router.get("/services/:id", serviceCtrl.showOneService);

router.use(require("../config/authentication"));
router.post("/services", checkAdmin, serviceCtrl.createService);
router.delete("/services/:id", checkAdmin, serviceCtrl.deleteService);
router.put("/services/:id", checkAdmin, serviceCtrl.editService);

module.exports = router;
