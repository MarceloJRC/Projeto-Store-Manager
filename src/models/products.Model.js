const connection = require('./connection');

const allProducts = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id',
  );
  return products;
};

const findProductsById = async (productId) => {
  const [[productById]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [productId],
  );
  return productById;
};

const insertProducts = async (products) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUE (?)', [...Object.values(products)],
  );
  return insertId;
};

module.exports = {
  allProducts,
  findProductsById,
  insertProducts,
};