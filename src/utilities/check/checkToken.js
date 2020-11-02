export const checkToken = () => {
  if (localStorage.getItem("userToken")) {
    return true;
  } else {
    return false;
  }
};
export const getToken = () => {
  return (localStorage.getItem("userToken"))
}
export const setToken = (token) => {
  localStorage.setItem("userToken", token);
  return token
};

export const clearToken = () => {
  localStorage.removeItem("userToken");
  localStorage.clear();
};
