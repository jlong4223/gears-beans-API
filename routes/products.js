const express = require("express");
const router = express.Router();
const productsCtrl = require("../controllers/products");
const { checkAdmin } = require("../middleware/authentication");

router.get("/products", productsCtrl.showProducts);
router.get("/products/:id", productsCtrl.showOneProduct);

router.use(require("../config/authentication"));
router.post("/products", checkAdmin, productsCtrl.createProduct);
router.delete("/products/:id", checkAdmin, productsCtrl.deleteProduct);
router.put("/products/:id", checkAdmin, productsCtrl.editProduct);

module.exports = router;
