const { productsModel } = require('../models');

const allProducts = async () => {
  const products = await productsModel.allProducts();

  return products;
};

const findProductsById = async (productId) => {
  const productById = await productsModel.findProductsById(productId);

  return productById;
};

module.exports = {
  allProducts,
  findProductsById,
};