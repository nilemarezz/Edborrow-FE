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
  SET_TO_DATE_CART
} from "../actions/ItemAction";
import * as R from "ramda";
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
    default:
      return state;
  }
}
