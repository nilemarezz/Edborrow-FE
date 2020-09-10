
import * as R from "ramda";
import { GET_USER_LIST, LOADING_USER_LIST, DELETE_USER } from '../actions/UserAction'
const initialState = {
  userList: [],
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_USER_LIST:
      return R.pipe(R.assocPath(["loading"], action.payload))(state);
    case GET_USER_LIST:
      return R.pipe(R.assocPath(["userList"], action.payload))(state);
    case DELETE_USER:
      return R.assocPath(
        ["userList"],
        R.reject(R.propEq('userId', action.payload))(state.userList)
      )(state);
    default:
      return state;
  }
}
