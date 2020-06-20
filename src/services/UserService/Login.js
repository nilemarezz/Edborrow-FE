const LoginService = async (user) => {
  try {
    const res = await fetch(`https://edborrow.ga/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
      body: JSON.stringify({ userId: user.username, password: user.password }),
    });
    const datares = await res.json();
    if (datares.result === "false") {
      return false;
    } else {
      return datares;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};
export default LoginService;
