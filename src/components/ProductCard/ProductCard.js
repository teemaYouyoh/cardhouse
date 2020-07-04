import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './product-card.scss';

class ProductCard extends Component {
  state = {
    purchaseButtonText: 'Купити',
  }

  componentDidMount() {
    const { _id } = this.props.product;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.find((item) => item._id === _id)) { // проверка на наличие товара в корзине
      const purchaseButtonText = <span>Куплено <FontAwesomeIcon icon={faShoppingCart}/></span>;
      this.setState({
        purchaseButtonText,
      });
    }
  }

  purchase = async (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (!cart.find((item) => item._id === product._id)) { // проверка на наличие товара в корзине
      product.amount = '1';
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
    }

    const purchaseButtonText = <span>Куплено <FontAwesomeIcon icon={faShoppingCart}/></span>;
    this.setState({
      purchaseButtonText,
    });
  }

  render() {
    const { _id, name, image, price } = this.props.product;
    const link = `/shop/product/${_id}`;

    return (
      <div className="product-card">
        <Link to={link}>
          <img className="product-image" src={image} alt={name}></img>
        </Link>

        <div className="product-name">
          <Link to={link} className="product-name-link">{name.toUpperCase()}</Link>
        </div>

        <div className="product-price">{`${price} грн`}</div>

        <button className="product-button btn" onClick={this.purchase.bind(this, this.props.product)}>
          {this.state.purchaseButtonText}
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object,
  addProduct: PropTypes.func,
};

ProductCard.defaultTypes = {
  product: {},
  addProduct: () => {},
};

export default ProductCard;
