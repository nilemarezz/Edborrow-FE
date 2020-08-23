import LoginService from "../../services/UserService/Login";
import { setToken } from "../../utilities/check/checkToken";
import {
  loginLoading,
  userLoginSuccess,
  userLoginFail,
} from "../../actions/UserAction";
export const LoginThunk = (data) => {
  return async (dispatch, getState) => {
    dispatch(loginLoading(true));
    try {
      const login = await LoginService(data);
      if (login.result === "false") {
        dispatch(userLoginFail(false));
        dispatch(loginLoading(false));
      } else {
        const data = {
          userToken: login.accessToken,
          user: login.user,
          status: true,
          admin: login.admin,
          staff: login.staff,
          department: login.department
        };

        dispatch(loginLoading(false));
        dispatch(userLoginSuccess(data));
        setToken(login.accessToken);
        return data;
      }
    } catch (err) {
      dispatch(loginLoading(false));
      return false

    }
  };
};
