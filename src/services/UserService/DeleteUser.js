import env from '../../env'
const DeleteUser = async (value) => {
  try {

    const res = await fetch(`${env.url}users?userId=${value}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      }
    });
    const datares = await res.json();
    return datares;
  }
  catch (err) {
    return false;
  }
};
export default DeleteUser;
