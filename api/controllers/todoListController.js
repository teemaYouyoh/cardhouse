'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks'),
  Manufacturer = mongoose.model('Manufacturers');

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
 
exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

exports.list_all_manufacturers = function(req, res) {
  Manufacturer.find({}, function(err, manufacturer) {
    if (err)
      res.send(err);
    res.json(manufacturer);
  });
};
 
exports.create_a_manufacturer = function(req, res) {
  var new_manufacturer = new Manufacturer(req.body);
  new_manufacturer.save(function(err, manufacturer) {
    if (err)
      res.send(err);
    res.json(manufacturer);
  });
};


exports.read_a_manufacturer = function(req, res) {
  Manufacturer.findById(req.params.manufacturerId, function(err, manufacturer) {
    if (err)
      res.send(err);
    res.json(manufacturer);
  });
};


exports.update_a_manufacturer = function(req, res) {
  Manufacturer.findOneAndUpdate({_id: req.params.manufacturerId}, req.body, {new: true}, function(err, manufacturer) {
    if (err)
      res.send(err);
    res.json(manufacturer);
  });
};


exports.delete_a_manufacturer = function(req, res) {


  Manufacturer.remove({
    _id: req.params.manufacturerId
  }, function(err, manufacturer) {
    if (err)
      res.send(err);
    res.json({ message: 'Manufacturer successfully deleted' });
  });
};
