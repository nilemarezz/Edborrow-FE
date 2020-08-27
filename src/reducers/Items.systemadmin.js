import {
  DELETE_ITEM_SYSTEMADMIN, GET_ITEM_SYSTEMADMIN, ITEM_LOADING_SYSTEMADMIN
} from '../actions/ItemAction.systemadmin'
import * as R from "ramda";

const initialState = {
  Items: [],
  loading: false,

}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEM_SYSTEMADMIN:
      return R.pipe(R.assocPath(["Items"], action.payload))(state);
    case ITEM_LOADING_SYSTEMADMIN:
      return R.pipe(R.assocPath(["loading"], action.payload))(state);
    case DELETE_ITEM_SYSTEMADMIN:
      return R.assocPath(
        ["Items"],
        R.reject(R.propEq('itemId', action.payload.itemId))(state.Items)
      )(state);
    default:
      return state
  }
}