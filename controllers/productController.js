const productModel = require('../models/productModel');

exports.getProducts = async (req, res) => {
  try {
    const [rows] = await productModel.getAllProducts();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const [rows] = await productModel.getProductById(req.params.id);
    if (!rows.length) return res.status(404).json({ message: "Not found" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, price, stock } = req.body;
    await productModel.createProduct({ name, price, stock });
    res.status(201).json({ message: "Product created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, price, stock } = req.body;
    await productModel.updateProduct(req.params.id, { name, price, stock });
    res.json({ message: "Product updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await productModel.deleteProduct(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
