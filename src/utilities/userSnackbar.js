import { checkToken } from "./check/checkToken";
import { route } from '../systemdata/route'
import { props } from "ramda";
export const snackBarCheckLogin = (user) => {
  if (localStorage.getItem('userToken')) {
    if (user.admin === false && user.department === false && user.staff === false) {
      return { text: "Login Success!", type: "success", redirect: route.user.home };
    } else if (user.admin === true) {
      return { text: "Login Success!", type: "success", redirect: route.systemadmin.items };
    } else {
      return { text: "Login Success!", type: "success", redirect: route.admin.dashboard };
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