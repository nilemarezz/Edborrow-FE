import UserDetail from "../../services/UserService/UserDetail";
import {
  loginLoading,
  userLoginSuccess,
  userLoginFail,
} from "../../actions/UserAction";
export const UserDetailThunk = (data) => {
  return async (dispatch, getState) => {
    dispatch(loginLoading(true));

    const detail = await UserDetail(data.token);
    const datares = {
      userToken: data.token,
      user: detail.data.firstName,
      status: true,
      admin: detail.data.admin,
    };

    if (data.type === "login") {
      dispatch(loginLoading(false));
      dispatch(userLoginSuccess(datares));
    } else {
    }
  };
};
