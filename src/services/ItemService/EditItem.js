import env from '../../env'
const AddItem = async (formData) => {

  try {
    const edit = await fetch(`${env.url}items`, {
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
}

export default AddItem;
