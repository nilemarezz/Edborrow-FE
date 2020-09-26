import * as R from "ramda";

const initialState = {
  darkmode: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "CHANGE_THEME":
      return R.pipe(R.assocPath(["darkmode"], action.payload))(state);
    default:
      return state
  }
}