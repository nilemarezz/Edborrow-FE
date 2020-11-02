import env from '../../env'
const DeleteItem = async (value) => {

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
}
export default DeleteItem;
