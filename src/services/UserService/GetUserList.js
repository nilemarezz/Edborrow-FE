import env from '../../env'
const GetUserService = async (user) => {
  try {
    const res = await fetch(`${env.url}users/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    const datares = await res.json();
    return datares;
  } catch (err) {
    return false;
  }
};
export default GetUserService;
