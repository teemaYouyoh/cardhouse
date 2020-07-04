import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import { addProducts } from './actions/actionsCreator';
import ShopService from './services/ShopService';

import Start from './components/Start/Start';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Purchase from './components/Purchase/Purchase';
import ProductPage from './components/ProductPage/ProductPage';
import AboutUs from './components/AboutUs/AboutUs';
import Bonuses from './components/NewsList/Bonuses/Bonuses';
import Mailing from './components/NewsList/Mailing/Mailing';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
        <ScrollToTop>
          <Header/>
          <Route path='/' component={Start} exact/>
          <Route path='/shop' component={Shop} exact/>
          <Route path='/shop/product/:id' component={ProductPage} exact/>
          <Route path='/about-us' component={AboutUs} exact/>
          <Route path='/cart' component={Cart} exact/>
          <Route path='/purchase' component={Purchase} exact/>
          <Route path='/bonuses' component={Bonuses} exact/>
          <Route path='/mailing' component={Mailing} exact/>
          <Footer/>
        </ScrollToTop>
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
