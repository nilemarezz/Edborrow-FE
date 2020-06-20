import LoginService from "../../services/Login";
import { setToken } from "../../utilities/checkToken";
import {
  loginLoading,
  userLoginSuccess,
  userLoginFail,
} from "../../actions/UserAction";
export const LoginThunk = (data) => {
  return async (dispatch, getState) => {
    dispatch(loginLoading(true));

    const login = await LoginService(data);
    console.log(login);
    if (login === false) {
      dispatch(userLoginFail(false));
      dispatch(loginLoading(false));
    } else {
      const data = {
        userToken: login.accessToken,
        user: login.user,
        status: true,
        admin: login.admin,
      };

      dispatch(loginLoading(false));
      dispatch(userLoginSuccess(data));
      setToken(login.accessToken);
      return data;
    }
  };
};
