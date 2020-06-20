import { combineReducers } from "redux";
import UserReducer from "./User";
export default combineReducers({
  User: UserReducer,
});
