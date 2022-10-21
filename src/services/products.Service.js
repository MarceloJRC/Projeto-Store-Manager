const { productsModel } = require('../models');

const allProducts = async () => {
  const products = await productsModel.allProducts();

  return products;
};

const findProductsById = async (productId) => {
  const productById = await productsModel.findProductsById(productId);

  return productById;
};

const addProducts = async (name) => {
  const newProductId = await productsModel.insertProducts({ name });
  const newProduct = await productsModel.findProductsById(newProductId);

  return { message: newProduct };
};

module.exports = {
  allProducts,
  findProductsById,
  addProducts,
};