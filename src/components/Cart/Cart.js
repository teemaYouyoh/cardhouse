import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ShopService from '../../services/ShopService';

import './cart.scss';

class Cart extends Component {
  state = {
    products: [],
    amount: 1,
  }

  ShopService = new ShopService();

  componentDidMount() {
    const products = JSON.parse(localStorage.getItem('cart')) || [];
    this.setState({
      products,
    });
  }

  handleChange = (i, event) => {
    event.persist();
    const { products } = this.state;
    const amount = event.target.value;

    products[i].amount = amount >= 1 && amount <= 100 ? amount : 1;

    this.setState({
      products,
    });
  }

  handleClick = (i, event) => {
    event.persist();
    const action = event.target.name;
    const { products } = this.state;

    if (action === 'minus') {
      products[i].amount = +products[i].amount > 1 ? +products[i].amount - 1 : 1;
    } else if (action === 'plus') {
      products[i].amount = +products[i].amount < 100 ? +products[i].amount + 1 : 100;
    }

    this.setState({
      products,
    });
  }

  countTotalPrice = () => {
    const { products } = this.state;
    let totalPrice = 0;

    products.forEach((item) => {
      totalPrice += (+item.price * +item.amount);
    });

    return totalPrice;
  }

  deleteProduct = (i) => {
    const { products } = this.state;
    products.shift(i);

    this.setState({
      products,
    });

    localStorage.setItem('cart', JSON.stringify(products));
  }

  purchase = () => {
    const { products } = this.state;
    localStorage.setItem('cart', JSON.stringify(products));
  }

  renderProduct = () => {
    const { products } = this.state;

    if (products.length === 0) {
      return (
        <>
          <h4 className="empty-cart-lable">Кошик порожній</h4>
          <Link to="/shop">
            <button className="cart-button small-btn">До магазину</button>
          </Link>
        </>
      );
    }

    return products.map((item, i) => {
      return (
        <div className="product" key={item._id}>
          <div className="delete">
            <div className="delete-button small-btn" onClick={this.deleteProduct.bind(this, i)}>
              x
            </div>
          </div>

          <div className="product-image">
            <img src={item.image} alt={item.name}/>
          </div>

          <Link to={`/shop/product/${item._id}`} className="product-name">
            {item.name}
          </Link>

          <div className="product-amount">
            <button
              className="amount-button small-btn"
              onClick={this.handleClick.bind(this, i)}
              name="minus"
            >
              -
            </button>
            <input
              className="amount-input"
              type="number"
              value={item.amount}
              onChange={this.handleChange.bind(this, i)}
              name="amount"
            />
            <button
              className="amount-button small-btn"
              onClick={this.handleClick.bind(this, i)}
              name="plus"
            >
              +
            </button>
          </div>

          <h4 className="product-price">
            {`${+item.price * +item.amount} грн.`}
          </h4>
        </div>
      );
    });
  }

  render() {
    const totalPrice = this.countTotalPrice();

    return (
      <main>
        <section className="cart">
          <div className="container">
            <div className="cart-wrapper">
              <h3 className="title">
                Кошик
              </h3>
              <div className="products">
                {this.renderProduct()}
              </div>
              <div className="total-price">
                {
                  totalPrice > 0
                    ? <>
                      <Link to="/purchase">
                        <button className="cart-button small-btn" onClick={this.purchase}>Оформити</button>
                      </Link>
                      <h4>
                        {`Всього: ${totalPrice} грн.`}
                      </h4>
                    </>
                    : <></>
                }
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default connect((state) => {
  return {
    cart: state.cart,
  };
})(Cart);
