const productsService = require('../services/products.Service');

const listAllProducts = async (_req, res) => {
  const products = await productsService.allProducts();
  
  res.status(200).json(products);
};

const listProductsById = async (req, res) => {
  const { id } = req.params;
  const productById = await productsService.findProductsById(id);
  if (productById) return res.status(200).json(productById);
  
  res.status(404).json({ message: 'Product not found' });
};

const addProducts = async (req, res) => {
  const { name } = req.body;
  const { message } = await productsService.addProducts(name);
  
  res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await productsService.updateProduct(id, name);
  const result = await productsService.findProductsById(id, name);
  if (result) return res.status(200).json(result);

  res.status(404).json({ message: 'Product not found' });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.findProductsById(id);
  await productsService.deleteProduct(id);
  if (result) return res.status(204).json(result);

  res.status(404).json({ message: 'Product not found' });
};

module.exports = {
  listAllProducts,
  listProductsById,
  addProducts,
  updateProduct,
  deleteProduct,
};