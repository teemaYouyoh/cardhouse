import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './product-card.css';

const ProductCard = (props) => {
  const { _id, name, image, price } = props.product;
  const link = `/shop/product/${_id}`;

  return (
    <div className="product-card">
      <div className="product-image">
        <Link to={link}>
          <img src={image} alt={name}></img>
        </Link>
      </div>
      <div className="product-name">
        <Link to={link} className="product-name-link">{name.toUpperCase()}</Link>
      </div>
      <div className="product-price">{`${price} грн`}</div>
      <button className="product-button">КУПИТИ</button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

ProductCard.defaultTypes = {
  product: {},
};

export default ProductCard;
