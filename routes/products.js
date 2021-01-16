const express = require("express");
const router = express.Router();
const productsCtrl = require("../controllers/products");

router.get("/products", productsCtrl.showProducts);
router.get("/products/:id", productsCtrl.showOneProduct);
router.post("/products", productsCtrl.createProduct);
router.delete("/products/:id", productsCtrl.deleteProduct);
router.put("/products/:id", productsCtrl.editProduct);

module.exports = router;
