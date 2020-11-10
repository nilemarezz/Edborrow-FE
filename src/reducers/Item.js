import {
  GETALL_ITEM_FAIL,
  GETALL_ITEM_SUCCESS,
  ITEM_LOADING,
  CLEAR_ITEM_INCART,
  DELETE_ITEM_INCART,
  ADD_ITEM_TO_CART,
  SEARCH_ITEM_SUCCESS,
  CLEAR_FILTER,
  CLEAR_CART,
  SET_FORM_DATE_CART,
  SET_TO_DATE_CART,
  SET_AMOUNT,
  SET_AMOUNT_LEFT,
  SET_LOADING_AMOUNT
} from "../actions/ItemAction";

import { UPDATE_DATE, UPDATE_AMOUNT } from '../actions/SocketAction'
import * as R from "ramda";
import { RefactorDate } from '../utilities/data/refactorDate'
const initialState = {
  Items: [],
  Cart: [],
  loading: null,
  filter: [],
};

const updateFrom = (itemId, value, cart, type) => {
  const newCart = cart;
  newCart.forEach(item => {
    if (item.itemId === itemId) {

      item.date[type] = value
    }

  });
  return newCart
}

export default function (state = initialState, action) {
  let cart = [...state.Cart];
  switch (action.type) {
    case GETALL_ITEM_SUCCESS:
      return R.pipe(R.assocPath(["Items"], action.payload))(state);
    case GETALL_ITEM_FAIL:
      return R.pipe(R.assocPath(["Items"], []))(state);
    case ITEM_LOADING:
      return R.pipe(R.assocPath(["loading"], action.payload))(state);
    case CLEAR_ITEM_INCART:
      return R.assocPath(["Cart"], [])(state);
    case DELETE_ITEM_INCART:
      return R.assocPath(
        ["Cart"],
        R.reject(R.propEq('itemId', action.payload))(state.Cart)
      )(state);
    case ADD_ITEM_TO_CART:
      return R.assocPath(["Cart"], R.append(action.payload, state.Cart))(state)
    case SEARCH_ITEM_SUCCESS:
      return R.pipe(R.assocPath(["filter"], action.payload))(state);
    case CLEAR_FILTER:
      return R.assocPath(["filter"], [])(state);
    case CLEAR_CART:
      return R.assocPath(["Cart"], [])(state);
    case SET_FORM_DATE_CART:
      return R.assocPath(["Cart"], updateFrom(action.payload.itemId, action.payload.from, state.Cart, "from"))(state);
    case SET_TO_DATE_CART:
      return R.assocPath(["Cart"], updateFrom(action.payload.itemId, action.payload.to, state.Cart, "to"))(state);
    case "UPDATE_ITEM":
      let item = state.Items;
      let index = item.findIndex(item => item.itemId === action.payload.itemId)
      item.splice(index, 1, action.payload);
      return R.assocPath(["Items"], item)(state);
    case "SET_CART":
      return R.assocPath(["Cart"], action.payload)(state);
    case SET_AMOUNT:
      let cartIndex = cart.findIndex(item => item.itemId == action.payload.id)
      cart[cartIndex].amount = parseInt(action.payload.amount)
      return R.assocPath(["Cart"], cart)(state);
    case UPDATE_AMOUNT:
      action.payload.data.map(item => {
        let index = state.Cart.findIndex(cartItem => cartItem.itemId == item.itemId)
        if (index === -1) {
          return state
        } else {
          cart[index].amountLeft = item.type === "minus" ? cart[index].amount - parseInt(item.amount) : cart[index].amount + parseInt(item.amount)
          cart[index].amount = 1
        }

      })
      return R.assocPath(["Cart"], cart)(state);
    case SET_AMOUNT_LEFT:
      console.log(action.payload)
      let indexItem = state.Cart.findIndex(cartItem => cartItem.itemId == action.payload.itemId)
      cart[indexItem].amountLeft = action.payload.amountLeft
      cart[indexItem].amount = action.payload.amount
      console.log(cart)
      return R.assocPath(["Cart"], cart)(state);
    case SET_LOADING_AMOUNT:
      let indexItemLoading = state.Cart.findIndex(cartItem => cartItem.itemId == action.payload.itemId)
      cart[indexItemLoading].loading = action.payload.loading
      return R.assocPath(["Cart"], cart)(state);
    default:
      return state;
  }
}
