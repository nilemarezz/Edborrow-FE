import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  SET_TOKEN,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../actions/UserAction";
import * as R from "ramda";
const initialState = {
  userToken: null,
  status: null,
  user: null,
  department: null,
  staff: null,
  loading: null,
  register: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return R.pipe(
        R.assocPath(["userToken"], action.payload.userToken),
        R.assocPath(["status"], action.payload.status),
        R.assocPath(["user"], action.payload.user),
        R.assocPath(["department"], action.payload.department),
        R.assocPath(["staff"], action.payload.staff)
      )(state);
    case LOGIN_FAIL:
      return R.assocPath(["status"], action.payload)(state);
    case LOGOUT_SUCCESS:
      return initialState;
    case LOGIN_LOADING:
      return R.assocPath(["loading"], action.payload)(state);
    case REGISTER_SUCCESS:
      return R.assocPath(["register"], true)(state);
    case REGISTER_FAIL:
      return R.assocPath(["register"], false)(state);
    default:
      return state;
  }
}
