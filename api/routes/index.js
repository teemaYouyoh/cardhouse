'use strict';
module.exports = function(app) {
  var productsList = require('../controllers/productsListController');
  var manufacturersList = require('../controllers/manufacturersListController');
  
  // productsList Routes
  app.route('/products')
    .post(productsList.create_a_product)
    .get(productsList.list_all_products);


  app.route('/products/:productId')
    .get(productsList.read_a_product)
    .put(productsList.update_a_product)
    .delete(productsList.delete_a_product);


  // manufacturersList Routes
  app.route('/manufacturers')
    .post(manufacturersList.create_a_manufacturer)
    .get(manufacturersList.list_all_manufacturers);


  app.route('/manufacturers/:manufacturersId')
    .get(manufacturersList.read_a_manufacturer)
    .put(manufacturersList.update_a_manufacturer)
    .delete(manufacturersList.delete_a_manufacturer);
};
