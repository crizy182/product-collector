const express = require('express');
const ProductsService = require('./productsService');

function productsApi(app) {
  const router = express.Router();
  app.use('/api/products', router);
  const productsService = new ProductsService();

  router.get('/', async function(req, res, next) {
    const { categories } = req.query;
    try {
      const products = await productsService.getProducts({ categories });
      res.status(200).json({
        data: products,
        message: 'products listed'
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = productsApi;
