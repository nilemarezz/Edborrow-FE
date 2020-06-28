import env from '../../env'
const LoginService = async (user) => {
  try {
    const res = await fetch(`${env.url}users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
      body: JSON.stringify({ userId: user.username, password: user.password }),
    });
    const datares = await res.json();

    return datares;
  } catch (err) {
    return false;
  }
};
export default LoginService;
