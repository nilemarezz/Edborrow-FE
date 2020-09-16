import RegisterService from "../../services/UserService/Register";
import {
  loginLoading,
  registerSuccess,
  registerFail,
} from "../../actions/UserAction";
export const RegisterThunk = (data) => {
  return async (dispatch, getState) => {
    dispatch(loginLoading(true));
    const register = await RegisterService(data);
    console.log(data)
    if (register.result === "false") {

      await dispatch(registerFail());
      await dispatch(loginLoading(false));
    } else {
      await dispatch(registerSuccess());
      await dispatch(loginLoading(false));
    }
  };
};
