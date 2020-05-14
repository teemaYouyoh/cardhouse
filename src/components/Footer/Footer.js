import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-coppyright">
            <b>©</b>2019-2020 <b>CARDHOUSE</b> : Все права защищены.
          </div>
          <div className="footer-social">
            <a href="">
              <img src="https://static.decemberboys.com.ua/img/social/instagram.bf5477e1d9.png" alt="social-instagramm"/>
            </a>
            <a href=""><img src="https://static.decemberboys.com.ua/img/social/facebook.c5eda62a1b.png" alt="social-facebook"/></a>
            <a href=""><img src="https://static.decemberboys.com.ua/img/social/youtube.fca89d2245.png" alt="social-youtube"/></a>
            <a href=""><img src="https://static.decemberboys.com.ua/img/social/twitter.261b1bed0b.png" alt="social-twitter"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
