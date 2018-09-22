import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return [...state, action.payload];
    case REMOVE_ITEM_FROM_CART:
      for (let i = 0; i < state.length; i += 1) {
        if (state[i] === action.payload) {
          state.splice(i, 1);
          break;
        }
      }
      return [...state];
    default:
      return state;
  }
};
