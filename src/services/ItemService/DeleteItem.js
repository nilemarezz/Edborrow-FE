
const DeleteItem = async (value) => {
  console.log(value)
  if (process.env.REACT_APP_ENV === "production") {
    try {
      await fetch(`${process.env.REACT_APP_URL}items`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
        body: JSON.stringify(value),
      });
      return true
    } catch (err) {
      return false
    }
  } else {
    return true
  }
};
export default DeleteItem;
