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

const updateProduct = async (id, name) => {
  const newProductId = await productsModel.updateProductById(id, name);

  return { message: newProductId };
};

const deleteProduct = async (id) => {
  const deletedProduct = await productsModel.deleteProductById(id);

  return { message: deletedProduct };
};

module.exports = {
  allProducts,
  findProductsById,
  addProducts,
  updateProduct,
  deleteProduct,
};