import { combineReducers } from 'redux';
import { productsList, cart } from './products';

const rootReducer = combineReducers({ productsList, cart });

export default rootReducer;
