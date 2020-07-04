import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import ShopService from '../../services/ShopService';

import './product-page.scss';

export default class ProductPage extends Component {
  state = {
    product: {},
    amount: 1,
    purchaseButtonText: 'Купити',
  }

  ShopService = new ShopService();

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    this.ShopService.getProduct(this.props.match.params.id)
      .then(this.onProductLoaded)
      .catch(() => {
        console.log('ProductPage : Error!!!');
      });
  }

  onProductLoaded = (product) => {
    this.setState({
      product,
    });

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.find((item) => item._id === product._id)) { // проверка на наличие товара в корзине
      const purchaseButtonText = <span>Куплено <FontAwesomeIcon icon={faShoppingCart}/></span>;
      this.setState({
        purchaseButtonText,
      });
    }
  }

  handleChange = (event) => {
    event.persist();
    const { product } = this.state;
    let amount = event.target.value;

    amount = amount >= 1 && amount <= 100 ? amount : 1;

    this.setState({
      amount,
    });
  }

  handleClick = (event) => {
    event.persist();
    const action = event.target.name;
    let { amount } = this.state;

    if (action === 'minus') {
      amount = +amount > 1 ? +amount - 1 : 1;
    } else if (action === 'plus') {
      amount = +amount < 100 ? +amount + 1 : 100;
    }

    this.setState({
      amount,
    });
  }

  purchase = () => {
    const { product, amount } = this.state;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (!cart.find((item) => item._id === product._id)) { // проверка на наличие товара в корзине
      product.amount = amount;
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
    }

    const purchaseButtonText = <span>Куплено <FontAwesomeIcon icon={faShoppingCart}/></span>;
    this.setState({
      purchaseButtonText,
    });
  }

  render() {
    const { name, manufacturer, country, price, amount, image, text } = this.state.product;

    return (
      <main>
        <section className="product">
          <div className="container">
            <div className="product-wrapper">
              <img className="product-image" src={image} alt={name}/>

              <div className="short-info">
                <h2 className="product-title">{name}</h2>
                <div className="product-characteristics">

                  <div className="characteristics-item">
                    <div className="option">Назва</div>
                    <div className="value">{name}</div>
                  </div>

                  <div className="characteristics-item">
                    <div className="option">Виробник</div>
                    <div className="value">{manufacturer}</div>
                  </div>

                  <div className="characteristics-item">
                    <div className="option">Країна</div>
                    <div className="value">{country}</div>
                  </div>

                </div>

                <div className="product-amount">
                  <button
                    className="amount-button small-btn"
                    onClick={this.handleClick}
                    name="minus"
                  >
                    -
                  </button>
                  <input
                    className="amount-input"
                    type="number"
                    value={this.state.amount}
                    onChange={this.handleChange}
                    name="amount"
                  />
                  <button
                    className="amount-button small-btn"
                    onClick={this.handleClick}
                    name="plus"
                  >
                    +
                  </button>
                  <div className="product-price">
                    {`${price} грн.`}
                  </div>
                </div>

                <button className="purchase btn" onClick={this.purchase}>{this.state.purchaseButtonText}</button>
              </div>
            </div>
          </div>
        </section>
        <section className="product-information">
          <div className="container">
            <div className="information-wrapper">
              {text}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

ProductPage.propTypes = {
  match: PropTypes.object,
};

ProductPage.defaultTypes = {
  match: {},
};
