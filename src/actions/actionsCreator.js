/* eslint-disable import/prefer-default-export */
const ADD_PRODUCTS = 'ADD_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

export const addProducts = (products) => {
  return {
    type: ADD_PRODUCTS,
    products,
  };
};

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};
