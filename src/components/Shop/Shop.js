import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ShopService from '../../services/ShopService';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductsList from '../ProductsList/ProductsList';
import RangeSlider from '../RangeSlider/InputSlider';
// import ProductCard from '../ProductCard/ProductCard';

import './shop.scss';

class Shop extends Component {
  state = {
    products: [],
    manufacturers: [],
    manufacturer: 'allManufacturers',
    manufacturerInfo: 'United States Playing Card Company - лидер производства игральных карт уже 135 лет.',
    sort: 'upPrice',
    minPrice: 0,
    maxPrice: 1000,
    minPriceSlider: 0,
    maxPriceSlider: 0,
  }

  ShopService = new ShopService();

  componentDidMount() {
    this.getProducts();
    this.getManufacturers();
  }

  getProducts = async () => {
    let { products } = this.props;

    if (products.length === 0) {
      const res = await this.ShopService.getProductsList();
      products = res;
    }

    await this.setState({
      products,
    });

    this.sortItems();
    this.getMinMaxPrice();
  }

  getManufacturers() {
    this.ShopService.getManufacturers()
      .then(this.onManufacturersLoaded)
      .catch(() => {
        console.log('Error');
      });
  }

  onManufacturersLoaded = (manufacturers) => {
    this.setState({
      manufacturers,
    });
    console.log(manufacturers);
  }

  sortItems = (event = null) => {
    let sort = '';
    const { products } = this.state;

    if (event) {
      sort = event.target.value;
    } else {
      sort = this.state.sort;
    }

    switch (sort) {
    case 'upPrice': { products.sort((a, b) => (+a.price > +b.price ? 1 : -1)); break; }
    case 'downPrice': { products.sort((a, b) => (+a.price < +b.price ? 1 : -1)); break; }
    case 'newestProducts': { products.sort((a, b) => (+a._id < +b._id ? 1 : -1)); break; }
    default: break;
    }

    this.setState({
      products,
      sort,
    });
  }

  filterProducts = (value) => {
    return this.state.products.filter((item) => {
      if ((value === 'allManufacturers' || value === item.manufacturer)
              && item.price >= this.state.minPrice
              && item.price <= this.state.maxPrice) {
        return true;
      }
      return false;
    });
  }

  setMaxPrice = (value) => {
    this.setState({
      maxPrice: value,
    });
  }

  getMinMaxPrice = () => {
    let minPrice = this.state.products[0].price;
    let maxPrice = this.state.products[0].price;

    this.state.products.forEach((element) => {
      if (element.price < minPrice) minPrice = element.price;
      if (element.price > maxPrice) maxPrice = element.price;
    });
    console.log(maxPrice);
    this.setState({
      minPrice,
      maxPrice,
      minPriceSlider: minPrice,
      maxPriceSlider: maxPrice,
    });
  }

  selectManufacturer = (event) => {
    event.persist();
    const { name: manufacturer, information: manufacturerInfo } = event.target.dataset;
    this.setState({
      manufacturer,
      manufacturerInfo,
    });
  }

  renderManufacturers = () => {
    const { manufacturers } = this.state;

    return manufacturers.map((item) => {
      return (
        <li
          data-name={item.name}
          data-information={item.information}
          onClick={this.selectManufacturer}
          key={item.name}
        >
          {item.name}
        </li>
      );
    });
  }

  renderManufacturersLogo = () => {
    const { manufacturers } = this.state;

    return manufacturers.map((item) => {
      return (
        <img
          className="manufacturer-logo"
          src={item.image}
          alt={item.name}
          data-name={item.name}
          data-information={item.information}
          onClick={this.selectManufacturer}
          key={item.name}
        />
      );
    });
  }

  render() {
    const { minPriceSlider, maxPriceSlider, manufacturer, manufacturerInfo } = this.state;
    const products = this.filterProducts(manufacturer);
    const manufacturers = this.renderManufacturers();

    return (
      <>
        <Header/>
        <main>
          <section className="shop">
            <div className="container">
              <div className="shop-wrapper">
                <section className="products-filters">

                  <h3>Виробники</h3>
                  <hr/>
                  <ul>
                    <li
                      onClick={this.selectManufacturer}
                      data-name="allManufacturers"
                      data-information="United States Playing Card Company - лидер производства игральных карт уже 135 лет."
                    >
                      Всі виробники
                    </li>
                    { manufacturers }
                  </ul>

                  <h3>Сортування</h3>
                  <hr/>
                  <select onChange={this.sortItems}>
                    <option value="upPrice" >Від дешевих до дорогих</option>
                    <option value="downPrice" >Від дорогих до дешевих</option>
                  </select>

                  <h3>Діапазон цін</h3>
                  <hr/>
                  <RangeSlider
                    setMaxPrice={ this.setMaxPrice }
                    minPrice = { +minPriceSlider }
                    maxPrice = { +maxPriceSlider }
                  />

                </section>
                <section className='products-list'>
                  <div className="manufacturers">
                    <img
                      className="manufacturer-logo"
                      src="https://media.decemberboys.com.ua/cache/33/e0/33e0a11a41bb3a4778277ab81999bd35.png"
                      alt="all"
                      data-name="allManufacturers"
                      data-information="United States Playing Card Company - лидер производства игральных карт уже 135 лет."
                      onClick={this.selectManufacturer}
                    />
                    {this.renderManufacturersLogo()}
                  </div>
                  <div className="manufacturer-info">
                    {manufacturerInfo}
                  </div>
                  <div className="products-wrapper">
                    <ProductsList products={products}/>
                  </div>
                </section>
              </div>
            </div>
          </section>

        </main>
        <Footer/>
      </>
    );
  }
}

Shop.propTypes = {
  products: PropTypes.array,
  match: PropTypes.object,
};

Shop.defaultTypes = {
  products: [],
  match: {},
};

export default connect((state) => {
  return {
    products: state.productsList,
  };
})(Shop);
