import DeleteUser from "../../services/UserService/DeleteUser";
import {
  loadingUserList, deleteUser
} from "../../actions/UserAction";
export const DeleteUserThunk = (value) => {
  return async (dispatch, getState) => {
    dispatch(loadingUserList(true));

    const list = await DeleteUser(value);
    if (list.result === "false") {
      await dispatch(loadingUserList(false));
      return false
    } else {
      await dispatch(deleteUser(value));
      await dispatch(loadingUserList(false));
      return true
    }
  }
};
