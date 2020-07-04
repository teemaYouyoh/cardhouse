var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  cors = require('cors'),
  mongoose = require('mongoose'),
  Product = require('./api/models/productsListModel'), //created model loading here
  manufacturer = require('./api/models/manufacturersListModel'), //created model loading here
  bodyParser = require('body-parser');
  
  // app.use(function (req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  //   next();
  // });

  app.use(cors())
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cardhouse');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/index'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });