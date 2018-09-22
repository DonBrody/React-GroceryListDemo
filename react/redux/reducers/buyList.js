import { ADD_ITEM_TO_BUY_LIST, REMOVE_ITEM_FROM_BUY_LIST } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM_TO_BUY_LIST:
      return [...state, action.payload];
    case REMOVE_ITEM_FROM_BUY_LIST:
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
