'use strict';
module.exports = function(app) {
  var productsList = require('../controllers/todoListController');
  
  // todoList Routes
  app.route('/tasks')
    .post(productsList.create_a_task)
    .get(productsList.list_all_tasks);


  app.route('/tasks/:taskId')
    .get(productsList.read_a_task)
    .put(productsList.update_a_task)
    .delete(productsList.delete_a_task);

  app.route('/manufacturers')
    .post(productsList.create_a_manufacturer)
    .get(productsList.list_all_manufacturers);


  app.route('/manufacturers/:manufacturersId')
    .get(productsList.read_a_manufacturer)
    .put(productsList.update_a_manufacturer)
    .delete(productsList.delete_a_manufacturer);
};
