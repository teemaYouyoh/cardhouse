import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

import AppBar from '../AppBar/AppBar';

const Header = () => {
  return (
    <>
      <section className="header">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-nav">
              <Link to="/">Головна</Link>
              <Link to="/shop">Магазин</Link>
              <Link to="/about-us">Про нас</Link>
              <Link to="/cart">Кошик</Link>
            </div>
          </div>
        </div>
      </section>
      <AppBar/>
    </>
  );
};

export default Header;
