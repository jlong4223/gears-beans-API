const Product = require("../models/product");

module.exports = {
  showProducts,
  createProduct,
};

// TODO set up other crud functions

async function showProducts(req, res) {
  const products = await Product.find({});
  console.log(products);
  res.json(products);
}

async function createProduct(req, res) {
  try {
    await Product.create(req.body);
    showProducts(req, res);
  } catch (err) {
    res.json({ err });
  }
}
