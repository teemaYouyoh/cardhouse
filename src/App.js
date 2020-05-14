import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { addProducts } from './actions/actionsCreator';
import ShopService from './services/ShopService';

import Start from './components/Start/Start';
import Shop from './components/Shop/Shop';
import ProductPage from './components/ProductPage/ProductPage';

import './App.css';

class App extends Component {
  ShopService = new ShopService();

  componentDidMount() {
    this.ShopService.getProductsList()
      .then(this.onProductsLoaded)
      .catch((err) => {
        console.error(err);
      });
  }

  onProductsLoaded = async (products) => {
    const { addProducts: reduxAddProducts } = this.props;
    await reduxAddProducts(products);
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Route path='/' component={Start} exact/>
          <Route path='/shop' component={Shop} exact/>
          <Route path='/shop/:name' component={Shop} exact/>
          <Route path='/shop/product/:id' component={ProductPage} exact/>
        </div>
      </Router>
    );
  }
}

export default connect((state) => {
  return {
    products: state.productsList,
  };
}, { addProducts })(App);

App.propTypes = {
  addProducts: PropTypes.func,
};

App.defaultTypes = {
  addProducts: () => {},
};
