import { Auth } from "../../services/UserService/Authentication";
import { setToken } from "../../utilities/check/checkToken";
import {
  loginLoading,
  userLoginSuccess,
  userLoginFail,
} from "../../actions/UserAction";
export const AuthThunk = (code) => {
  return async (dispatch, getState) => {
    console.log('AuthThunk')
    dispatch(loginLoading(true));
    try {
      console.log(code)
      const login = await Auth(code);
      console.log(login)
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
        return true;
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