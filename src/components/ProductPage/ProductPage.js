import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ShopService from '../../services/ShopService';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './product-page.css';

export default class ProductPage extends Component {
  state = {
    product: {},
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
  }

  render() {
    const { name, manufacturer, country, price, image } = this.state.product;

    return (
      <div>
        <Header/>
        <main>
          <div className="product-wrapper">
            <div className="container">
              <div className="product-info">

                <div className="product-image">
                  <img src={image} alt={name}></img>
                </div>
                <div className="product-main-info">
                  <div className="product-title">{name}</div>
                  <div className="product-characteristics">
                    <div className="options">
                      <div className="characteristics-item">Назва</div>
                      <div className="characteristics-item">Виробник</div>
                      <div className="characteristics-item">Країна</div>
                      <div className="characteristics-item">Упаковка</div>
                      <div className="characteristics-item">Матеріал</div>
                    </div>

                    <div className="value">
                      <div className="characteristics-item">{name}</div>
                      <div className="characteristics-item">{manufacturer}</div>
                      <div className="characteristics-item">{country}</div>
                      <div className="characteristics-item">Картона коробка</div>
                      <div className="characteristics-item">Картон з покриттям</div>
                    </div>
                  </div>

                  <div className="product_amount">
                    <button >-</button>
                    <input/>
                    <button >+</button>
                  </div>

                  <div className="product-buy">
                    <button className="purchase">В КОРЗИНУ</button>
                    <div className="product-price">{price} грн.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

ProductPage.propTypes = {
  match: PropTypes.object,
};

ProductPage.defaultTypes = {
  match: {},
};
