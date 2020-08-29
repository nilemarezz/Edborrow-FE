import { checkToken } from "./check/checkToken";
import { route } from '../systemdata/route'
import { props } from "ramda";
export const snackBarCheckLogin = (user) => {
  if (checkToken()) {
    if (user.admin === false && user.department === false && user.staff === false) {
      console.log('1')
      return { text: "Login Success!", type: "success", redirect: route.user.items };
    } else if (user.admin === true) {
      console.log('2')
      return { text: "Login Success!", type: "success", redirect: route.systemadmin.addItem };
    } else {
      console.log('3')
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