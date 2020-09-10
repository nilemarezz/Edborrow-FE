import { combineReducers } from "redux";
import UserReducer from "./User";
import ItemReducer from "./Item";
import ApplicationForm from './ApplicationForm';
import ApplicationList from './ApplicationList'
import ApplicationListAdmin from './ApplicationList.admin'
import ItemAdmin from './Item.admin'
import AddDepartment from './DepartmentList.systemadmin'
import ItemsSystemAdmin from './Items.systemadmin'
import Dashboard from './Dashboard.admin'
import UserList from './User.systemadmin'

export default combineReducers({
  User: UserReducer,
  Item: ItemReducer,
  Form: ApplicationForm,
  ApplicationList: ApplicationList,
  ADMIN_ApplicationList: ApplicationListAdmin,
  ADMIN_Item: ItemAdmin,
  SYSTEM_ADMIN_Department: AddDepartment,
  SYSTEM_ADMIN_Items: ItemsSystemAdmin,
  Dashboard: Dashboard,
  SYSTEM_ADMIN_UserList: UserList

});
