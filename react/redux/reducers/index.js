import { combineReducers } from 'redux';
import buyListReducer from './buyList';
import cartListReducer from './cartList';

export default combineReducers({
  buyList: buyListReducer,
  cartList: cartListReducer,
});
