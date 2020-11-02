import env from '../../env'
const AddUser = async (value) => {
  try {

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
  }
  catch (err) {
    return false;
  }
};
export default AddUser;
