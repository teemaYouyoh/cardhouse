const ADD_PRODUCTS = 'ADD_PRODUCTS';

const productsList = (state = [], { type, products }) => {
  switch (type) {
  case ADD_PRODUCTS: return products;
  default:
    return state;
  }
};

export default productsList;
