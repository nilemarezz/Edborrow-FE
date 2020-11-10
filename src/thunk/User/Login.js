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
        setTimeout(
          () => {
            dispatch(userLoginFail(false));
            dispatch(loginLoading(false));
          }, 1500)
        return false
      } else {
        const data = {
          userToken: login.accessToken,
          user: login.user,
          status: true,
          admin: login.admin,
          staff: login.staff,
          department: login.department,
          student: login.student
        };
        dispatch(userLoginSuccess(data));
        if (data !== undefined) {
          setToken(login.accessToken);
        }

        setTimeout(
          () => {
            dispatch(loginLoading(false));


          }, 1500)
        return data;
      }
    } catch (err) {
      console.log(err)
      setTimeout(
        () => {
          dispatch(loginLoading(false));

        }, 1500)
      return false

    }
  };
};
