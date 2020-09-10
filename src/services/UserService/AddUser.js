import env from '../../env'
const AddUser = async (value) => {
  try {
    if (process.env.REACT_APP_ENV === "production") {
      const res = await fetch(`${env.url}users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
        body: JSON.stringify(value),
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
export default AddUser;
