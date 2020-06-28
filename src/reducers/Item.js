import {
  GETALL_ITEM_FAIL,
  GETALL_ITEM_SUCCESS,
  ITEM_LOADING,
  CLEAR_ITEM_INCART,
  DELETE_ITEM_INCART,
  ADD_ITEM_TO_CART,
  SEARCH_ITEM_SUCCESS,
  CLEAR_FILTER
} from "../actions/ItemAction";
import * as R from "ramda";
const initialState = {
  Items: [],
  Cart: [],
  loading: null,
  filter : [],
};
const isMatchById = (data) => {
  return (item) => item.id !== data.id;
};
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
        R.filter(isMatchById(action.payload), state.Cart)
      )(state);
    case ADD_ITEM_TO_CART:
      return R.assocPath(["Cart"], R.append(action.payload, state.Cart))(state)
    case SEARCH_ITEM_SUCCESS :
      return R.pipe(R.assocPath(["filter"], action.payload))(state);
    case CLEAR_FILTER :
      return R.assocPath(["filter"], [])(state);
    default:
      return state;
  }
}
