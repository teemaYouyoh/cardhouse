/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

import ProductsList from '../ProductsList/ProductsList';
import FeedbackForm from '../FeedbackForm/FeedbackForm';

import './start.scss';

const Start = (props) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
  };

  return (
    <main>
      <section className="propose">
        <div className="container">
          <div className="propose-wrapper">
            <h2 className="propose-title">новини</h2>
            <div className="propose-items">
              <div className="propose-item">
                <div className="item-image">
                  <Link to="/bonuses"><img src="https://decemberboys.com.ua/media/file_manager/allaround/bonus-pt-z.jpg" alt="Бонусы"></img></Link>
                </div>
                <div className="item-label">
                  <Link to="/bonuses">бонуси</Link>
                </div>
                <div className="item-text">
                  Купуйте в нашому магазині і заробляйте бонусні очки. Витрачайте їх при вашому наступному замовленні та економте!
                </div>
              </div>
              <div className="propose-item">
                <div className="item-image">
                  <Link to="/mailing"><img src="https://decemberboys.com.ua/media/file_manager/allaround/newsletter-z.jpg" alt="Рассылка"></img></Link>
                </div>
                <div className="item-label">
                  <Link to="/mailing">розсилка</Link>
                </div>
                <div className="item-text">
                  Підписуйтесь на нашу розсилку: новини, прем'єри і купони на знижку до 20% в кожному листі! 1-2 email на місяць.
                </div>
              </div>
              <div className="propose-item">
                <div className="item-image">
                  <Link to="/shop"><img src="https://media.decemberboys.com.ua/file_manager/allaround/tutorials-slider.jpg" alt="Обучение"></img></Link>
                </div>
                <div className="item-label">
                  <Link to="/shop">магазин</Link>
                </div>
                <div className="item-text">
                  Навчайтесь. Тренуйтесь. Дивуйте. З картами для фокусів та кардистрі, які Ви можете прижбати в нашому магазині.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new-products">
        <div className="container">
          <div className="new-products-wrapper">
            <h2 className="new-products-title">новинки</h2>
            <div className="new-products-row">
              <ProductsList count={4} products={props.products}/>
            </div>
          </div>
        </div>
      </section>

      <section className="news-slider">
        <Slider {...settings}>
          <div>
            <div className="my-slide_1">
              <div className="slide-container">
                <div className="slide-contant">
                  <img src="https://decemberboys.com.ua/media/file_manager/legacy/slider/dblogosilder.png" alt="logo"/>
                  <span className="slide-title">Z Polo с секретом от December Boys. Больше, чем мерч.</span>
                  {/* <Link to="/shop" className="slide-button">купить</Link> */}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="my-slide_2">
              <div className="slide-container">
                <div className="slide-contant">
                  <img src="https://decemberboys.com.ua/media/file_manager/legacy/slider/dblogosilder.png" alt="logo"/>
                  <span className="slide-title">Кожаные чехлы для карт DB Holders. Больше, чем аксессуар.</span>
                  {/* <Link to="/shop" className="slide-button">купить</Link> */}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="my-slide_3">
              <div className="slide-container">
                <div className="slide-contant">
                  <img src="https://decemberboys.com.ua/media/file_manager/legacy/slider/dblogosilder.png" alt="logo"/>
                  <span className="slide-title">{'Gimmick\'d II. 3 новых гиммика для выноса мозга зрителю.'}</span>
                  {/* <Link to="/shop" className="slide-button">купить</Link> */}
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      <FeedbackForm/>
    </main>
  );
};

Start.propTypes = {
  products: PropTypes.array,
};

Start.defaultTypes = {
  products: [],
};

export default connect((state) => {
  return {
    products: state.productsList,
  };
})(Start);
