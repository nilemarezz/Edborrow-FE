import { combineReducers } from "redux";
import UserReducer from "./User";
import ItemReducer from "./Item";
export default combineReducers({
  User: UserReducer,
  Item: ItemReducer,
});
