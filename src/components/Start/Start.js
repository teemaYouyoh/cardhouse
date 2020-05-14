/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { Carousel } from 'react-responsive-carousel';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckSquare, faTruck, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductsList from '../ProductsList/ProductsList';

import './start.css';
import '../../App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Start = (props) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
  };

  console.log(props.products);
  return (
    <section className="products">
      <Header/>
      <main>
        {/* <div className="advantages">
                    <div className="container">

                        <div className="advantages-item">
                            <div className="advantages-img">
                                <FontAwesomeIcon icon={faCheckSquare} />
                            </div>
                            <div className="advantages-title">
                                ЯКІСТЬ
                            </div>
                            <div className="advantages-text">
                                Найкраща якість від вірибника
                            </div>
                        </div>

                        <div className="advantages-item">
                            <div className="advantages-img">
                                <FontAwesomeIcon icon={faTruck} />
                            </div>
                            <div className="advantages-title">
                                ДОСТАВКА
                            </div>
                            <div className="advantages-text">
                                Швидко доставимо у будь-яке місце України
                            </div>
                        </div>

                        <div className="advantages-item">
                            <div className="advantages-img">
                                <FontAwesomeIcon icon={faQuestionCircle} />
                            </div>
                            <div className="advantages-title">
                                КОНСУЛЬТАЦІЯ
                            </div>
                            <div className="advantages-text">
                                Цілодобові онлайн-консультанти
                            </div>
                        </div>
                    </div>
                </div> */}

        <section className="propose">
          <div className="container">
            <div className="propose-wrapper">
              <div className="propose-item">
                <div className="item-image">
                  <Link to="/shop"><img src="https://decemberboys.com.ua/media/file_manager/allaround/bonus-pt-z.jpg" alt="Бонусы"></img></Link>
                </div>
                <div className="item-label">
                  <Link to="/shop">бонусы</Link>
                </div>
                <div className="item-text">
                  Покупайте в нашем магазине и зарабатывайте бонусные очки. Тратьте их при вашем следующем заказе и экономьте!
                </div>
              </div>
              <div className="propose-item">
                <div className="item-image">
                  <Link to="/shop"><img src="https://decemberboys.com.ua/media/file_manager/allaround/newsletter-z.jpg" alt="Рассылка"></img></Link>
                </div>
                <div className="item-label">
                  <Link to="/shop">Рассылка</Link>
                </div>
                <div className="item-text">
                  Подписывайтесь на нашу рассылку: новости, премьеры и купоны на скидку до 20% в каждом письме! 1-2 email в месяц.
                </div>
              </div>
              <div className="propose-item">
                <div className="item-image">
                  <Link to="/shop"><img src="https://media.decemberboys.com.ua/file_manager/allaround/tutorials-slider.jpg" alt="Обучение"></img></Link>
                </div>
                <div className="item-label">
                  <Link to="/shop">Обучение</Link>
                </div>
                <div className="item-text">
                  Учитесь. Тренируйтесь. Удивляйте. Обучение close-up фокусам, трюкам с картами и кардистри.
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
                    <Link to="/shop" className="slide-button">купить</Link>
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
                    <Link to="/shop" className="slide-button">купить</Link>
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
                    <Link to="/shop" className="slide-button">купить</Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </section>

        {/* <div className="advantages">
                    <div className="container">

                        <div className="advantages-item">
                            <div className="advantages-img">
                                <FontAwesomeIcon icon={faCheckSquare} />
                            </div>
                            <div className="advantages-title">
                                ЯКІСТЬ
                            </div>
                            <div className="advantages-text">
                                Найкраща якість від вірибника
                            </div>
                        </div>

                        <div className="advantages-item">
                            <div className="advantages-img">
                                <FontAwesomeIcon icon={faTruck} />
                            </div>
                            <div className="advantages-title">
                                ДОСТАВКА
                            </div>
                            <div className="advantages-text">
                                Швидко доставимо у будь-яке місце України
                            </div>
                        </div>

                        <div className="advantages-item">
                            <div className="advantages-img">
                                <FontAwesomeIcon icon={faQuestionCircle} />
                            </div>
                            <div className="advantages-title">
                                КОНСУЛЬТАЦІЯ
                            </div>
                            <div className="advantages-text">
                                Цілодобові онлайн-консультанти
                            </div>
                        </div>
                    </div>
                </div> */}

      </main>

      <Footer/>
    </section>

  );
};

export default connect((state) => {
  return {
    products: state.productsList,
  };
})(Start);
