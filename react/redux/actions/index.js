import {
  ADD_ITEM_TO_BUY_LIST,
  REMOVE_ITEM_FROM_BUY_LIST,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
} from './types';

export function addItemToBuyList(item) {
  return {
    type: ADD_ITEM_TO_BUY_LIST,
    payload: item,
  };
}

export function removeItemFromBuyList(item) {
  return {
    type: REMOVE_ITEM_FROM_BUY_LIST,
    payload: item,
  };
}

export function addItemToCart(item) {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item,
  };
}

export function removeItemFromCart(item) {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: item,
  };
}
