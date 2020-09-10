export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const SET_TOKEN = "SET_TOKEN";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const GET_USER_LIST = "GET_USER_LIST";
export const LOADING_USER_LIST = "LOADING_USER_LIST"
export const DELETE_USER = "DELETE_USER"
export const SYSTEM_ADMIN_ADD_USER = "SYSTEM_ADMIN_ADD_USER"

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
export const getUserList = (data) => {
  return { type: GET_USER_LIST, payload: data };
}
export const loadingUserList = (data) => {
  return { type: LOADING_USER_LIST, payload: data };
}
export const deleteUser = (data) => {
  return { type: DELETE_USER, payload: data };
}
export const addUser = (data) => {
  return { type: SYSTEM_ADMIN_ADD_USER, payload: data };
}