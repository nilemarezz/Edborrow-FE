export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const SET_TOKEN = "SET_TOKEN";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const userLoginSuccess = (data) => {
  return { type: LOGIN_SUCCESS, payload: data };
};
export const userLoginFail = (data) => {
  return { type: LOGIN_FAIL, payload: data };
};
export const loginLoading = (data) => {
  return { type: LOGIN_LOADING, payload: data };
};
export const logoutSuccess = () => {
  return { type: LOGOUT_SUCCESS };
};

export const registerSuccess = () => {
  return { type: REGISTER_SUCCESS };
};
export const registerFail = () => {
  return { type: REGISTER_FAIL };
};
