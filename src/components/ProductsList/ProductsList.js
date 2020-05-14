import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductCard from '../ProductCard/ProductCard';

export default class ProductsList extends Component {
  renderItems = () => {
    const { count } = this.props;
    let { products } = this.props;

    if (count !== 0 && products.length > count) {
      products = products.slice(-count);
    }

    return products.map((item) => {
      return (
        <ProductCard
          key={item._id}
          product={item}
        />
      );
    });
  }

  render() {
    return (
      <>
        {this.renderItems()}
      </>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.array,
  count: PropTypes.number,
};

ProductsList.defaultTypes = {
  products: [],
  count: 0,
};
