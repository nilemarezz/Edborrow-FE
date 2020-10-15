import env from '../../env'
const DeleteItem = async (value) => {
  if (process.env.REACT_APP_ENV === "production") {
    try {
      await fetch(`${env.url}items?itemId=${value.itemId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
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
