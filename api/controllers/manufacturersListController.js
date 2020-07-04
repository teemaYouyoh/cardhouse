'use strict';

var mongoose = require('mongoose'),
  Manufacturer = mongoose.model('Manufacturers');

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
