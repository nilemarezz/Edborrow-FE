import { checkToken } from "./check/checkToken";
export const snackBarCheckLogin = (admin) => {
  if (checkToken()) {
    if (admin === false) {
      return { text: "Login Success!", type: "success", redirect: '/' };
    } else {
      return { text: "Login Success!", type: "success", redirect: "/dashboard" };
    }
  } else {
    return { text: "Login Fail!, Please try Again", type: "error" };
  }
};

export const snackBarRegister = (type) => {
  if (type === false) {
    return { text: "Email is already exist!", type: "error" };
  }
};