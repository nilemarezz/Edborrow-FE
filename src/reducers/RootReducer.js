import { combineReducers } from "redux";
import UserReducer from "./User";
import ItemReducer from "./Item";
import ApplicationForm from './ApplicationForm';
export default combineReducers({
  User: UserReducer,
  Item: ItemReducer,
  Form: ApplicationForm,
});
