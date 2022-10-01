const express= require('express');
const productR=express.Router();
const productController= require('./product.controller')

productR.get('/',productController.getProducts);
productR.get('/:id',productController.getProductsById);
productR.post('/',productController.createProduct);
productR.delete('/:id',productController.deleteProducts);
