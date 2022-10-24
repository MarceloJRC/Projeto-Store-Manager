const express = require('express');
const productsController = require('../controllers/products.Controller');
const { nameValidation } = require('../middlewares/error.productsValidations');

const router = express.Router();

router.get('/', productsController.listAllProducts);

router.get('/:id', productsController.listProductsById);

router.post('/', nameValidation, productsController.addProducts);

router.put('/:id', nameValidation, productsController.updateProduct);

module.exports = router;