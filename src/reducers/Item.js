import {
  GETALL_ITEM_FAIL,
  GETALL_ITEM_SUCCESS,
  ITEM_LOADING,
} from "../actions/ItemAction";
import * as R from "ramda";
const initialState = {
  Items: [],
  Cart: [],
  loading: null,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GETALL_ITEM_SUCCESS:
      return R.pipe(R.assocPath(["Items"], action.payload))(state);
    case GETALL_ITEM_FAIL:
      return R.pipe(R.assocPath(["Items"], []))(state);
    case ITEM_LOADING:
      return R.pipe(R.assocPath(["loading"], action.payload))(state);

    default:
      return state;
  }
}
