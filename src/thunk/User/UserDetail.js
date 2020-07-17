import UserDetail from "../../services/UserService/UserDetail";
import {
  loginLoading,
  userLoginSuccess,
  userLoginFail,
} from "../../actions/UserAction";
import ErrorPage from '../../containers/ErrorPage/ErrorPage'
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
          admin: detail.data.admin,
        };
        dispatch(loginLoading(false));
        dispatch(userLoginSuccess(datares));
      } else {
      }
    } catch (err) {
      ErrorPage()
    }

  };
};
