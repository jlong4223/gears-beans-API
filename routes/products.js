const express = require("express");
const router = express.Router();
const productsCtrl = require("../controllers/products");

router.get("/products", productsCtrl.showProducts);
router.post("/products", productsCtrl.createProduct);

module.exports = router;
