import env from '../../env'
const DeleteUser = async (value) => {
  try {
    if (process.env.REACT_APP_ENV === "production") {
      const res = await fetch(`${env.url}users?userId=${value}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        }
      });
      const datares = await res.json();
      return datares;
    } else {
      return { result: "success" }
    }
  }
  catch (err) {
    return false;
  }
};
export default DeleteUser;
