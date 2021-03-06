import UserDetail from "../../services/UserService/UserDetail";
import {
  loginLoading,
  userLoginSuccess,
  userLoginFail,
} from "../../actions/UserAction";

export const UserDetailThunk = (data) => {
  return async (dispatch, getState) => {
    try {
      dispatch(loginLoading(true));
      const detail = await UserDetail(data.token);
      if (data.type === "login") {
        const datares = {
          userToken: data.token,
          user: detail.data.firstName,
          status: true,
          department: detail.data.department,
          staff: detail.data.staff,
          admin: detail.data.admin
        };
        dispatch(loginLoading(false));
        dispatch(userLoginSuccess(datares));
      } else {
      }
    } catch (err) {
      dispatch(loginLoading(false));
      return false
    }

  };
};
