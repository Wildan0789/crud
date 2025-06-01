const db = require('../config/db');

exports.getAllProducts = () => {
  return db.query('SELECT * FROM products');
};

exports.getProductById = (id) => {
  return db.query('SELECT * FROM products WHERE id = ?', [id]);
};

exports.createProduct = (data) => {
  return db.query('INSERT INTO products SET ?', [data]);
};

exports.updateProduct = (id, data) => {
  return db.query('UPDATE products SET ? WHERE id = ?', [data, id]);
};

exports.deleteProduct = (id) => {
  return db.query('DELETE FROM products WHERE id = ?', [id]);
};
