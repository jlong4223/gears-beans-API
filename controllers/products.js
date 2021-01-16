const Product = require("../models/product");

module.exports = {
  showProducts,
  showOneProduct,
  createProduct,
  editProduct,
  deleteProduct,
};

async function showProducts(req, res) {
  const products = await Product.find({});
  // console.log(products);
  res.json(products);
}

async function showOneProduct(req, res) {
  try {
    const oneProduct = await Product.findById(req.params.id);
    res.json(oneProduct);
  } catch (err) {
    res.json(err);
  }
}

async function createProduct(req, res) {
  try {
    await Product.create(req.body);
    showProducts(req, res);
  } catch (err) {
    res.json({ err });
  }
}

async function editProduct(req, res) {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json(updateProduct);
  } catch (err) {
    res.json(err);
  }
}

async function deleteProduct(req, res) {
  try {
    const deleteOne = await Product.findByIdAndDelete(req.params.id);
    res.json(deleteOne);
  } catch (err) {
    res.json(err);
  }
}
