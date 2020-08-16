import { combineReducers } from "redux";
import UserReducer from "./User";
import ItemReducer from "./Item";
import ApplicationForm from './ApplicationForm';
import ApplicationList from './ApplicationList'
import ApplicationListAdmin from './ApplicationList.admin'
import ItemAdmin from './Item.admin'
export default combineReducers({
  User: UserReducer,
  Item: ItemReducer,
  Form: ApplicationForm,
  ApplicationList: ApplicationList,
  ADMIN_ApplicationList: ApplicationListAdmin,
  ADMIN_Item: ItemAdmin,
});
