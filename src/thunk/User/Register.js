import RegisterService from "../../services/Register";
import {
  loginLoading,
  registerSuccess,
  registerFail,
} from "../../actions/UserAction";
export const RegisterThunk = (data) => {
  return async (dispatch, getState) => {
    dispatch(loginLoading(true));
    const register = await RegisterService(data);
    console.log(register);
    if (register.result === "false") {
      console.log("asdasdasd");

      await dispatch(registerFail());
      await dispatch(loginLoading(false));
    } else {
      await dispatch(registerSuccess());
      await dispatch(loginLoading(false));
    }
  };
};
