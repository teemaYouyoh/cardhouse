const ADD_PRODUCTS = 'ADD_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

export const productsList = (state = [], { type, products }) => {
  switch (type) {
  case ADD_PRODUCTS: return products;
  default:
    return state;
  }
};

export const cart = (state = [], { type, product }) => {
  switch (type) {
  case ADD_PRODUCT: {
    return [
      ...state,
      product,
    ];
  }
  default:
    return state;
  }
};
