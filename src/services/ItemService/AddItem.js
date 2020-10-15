
import env from '../../env'
const AddItem = async (formData) => {
  if (process.env.REACT_APP_ENV === "production") {
    try {
      const res = await fetch(`${env.url}items`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
        body: formData,
      });
      const data = await res.json()
      return true
    } catch (err) {
      return false
    }
  } else {
    return true
  }
};
export default AddItem;
