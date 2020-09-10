import GetUserList from "../../services/UserService/GetUserList";
import {
  loadingUserList, getUserList
} from "../../actions/UserAction";
import MockUser from '../../__mock__/UserList.json'
export const UserListThunk = () => {
  return async (dispatch, getState) => {
    dispatch(loadingUserList(true));
    if (process.env.REACT_APP_ENV === "production") {
      const list = await GetUserList();
      if (list.result === "false") {
        await dispatch(loadingUserList(false));
        return false
      } else {
        await dispatch(getUserList(list.data));
        await dispatch(loadingUserList(false));
        return true
      }
    } else {
      await dispatch(getUserList(MockUser.data));
      await dispatch(loadingUserList(false));
      return true

    }
  }
};
