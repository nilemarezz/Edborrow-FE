import {
  GET_ITEM_ADMIN, GET_ITEM_DETAIL_ADMIN, ITEM_LOADING_ADMIN, RESET_DETAIL
} from '../actions/ItemAction.admin'
import * as R from "ramda";

const initialState = {
  Items: [],
  loading: false,
  Detail: {
    itemId: null,
    itemBrand: null,
    itemModel: null,
    itemDescription: null,
    itemName: null,
    itemImage: null,
  },
  activeEdit: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEM_ADMIN:
      return R.pipe(R.assocPath(["Items"], action.payload))(state);
    case ITEM_LOADING_ADMIN:
      return R.pipe(R.assocPath(["loading"], action.payload))(state);
    case GET_ITEM_DETAIL_ADMIN:
      return R.pipe(R.assocPath(["Detail"], action.payload))(state);
    default:
      return state
  }
}