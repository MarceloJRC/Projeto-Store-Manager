const productsService = require('../services/products.Service');

const listAllProducts = async (_req, res) => {
  const products = await productsService.allProducts();
  
  res.status(200).json(products);
};

const listProductsById = async (req, res) => {
  const { id } = req.params;
  const productById = await productsService.findProductsById(id);
  if (productById) return res.status(200).json(productById);
  
  return res.status(404).json({ message: 'Product not found' });
};

module.exports = {
  listAllProducts,
  listProductsById,
};