import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-coppyright">
            <b>©</b>2019-2020 <b>CARDHOUSE</b> : Все права защищены.
          </div>
          <div className="footer-social">
            <a href="https://www.instagram.com/?">
              <img src="https://static.decemberboys.com.ua/img/social/instagram.bf5477e1d9.png" alt="social-instagramm"/>
            </a>
            <a href="https://www.facebook.com/">
              <img src="https://static.decemberboys.com.ua/img/social/facebook.c5eda62a1b.png" alt="social-facebook"/>
            </a>
            <a href="https://www.youtube.com/">
              <img src="https://static.decemberboys.com.ua/img/social/youtube.fca89d2245.png" alt="social-youtube"/>
            </a>
            <a href="https://twitter.com/">
              <img src="https://static.decemberboys.com.ua/img/social/twitter.261b1bed0b.png" alt="social-twitter"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
