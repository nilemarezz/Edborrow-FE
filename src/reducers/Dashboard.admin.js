
import * as R from "ramda";
const initialState = {
  Data: {
    lastestBorrow: [],
    mostBorrow: {
      itemName: [], borrowTime: [],
    },
    countmonth: [],
    waiting: 0,
    late: 0,
    items: 0
  },
  // Data: null,
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOADING_DASHBOARD":
      return R.pipe(R.assocPath(["loading"], action.payload))(state);
    case "GET_DASHBOARD":
      return R.pipe(R.assocPath(["Data"], action.payload))(state);
    default:
      return state;
  }
}
