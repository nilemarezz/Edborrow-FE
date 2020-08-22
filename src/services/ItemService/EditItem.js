
const AddItem = async (formData) => {
  if (process.env.REACT_APP_ENV === "production") {
    try {
      const edit = await fetch(`${process.env.REACT_APP_URL}items`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
        body: formData,
      });
      const editJson = await edit.json()
      if (editJson.result === "false") {
        return false
      } else {
        return true
      }

    } catch (err) {
      return false
    }
  } else {
    return true
  }
};
export default AddItem;
