import env from '../../env'
const AddDepartment = async (value) => {

  try {
    const res = await fetch(`${env.url}admin/department`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
      body: JSON.stringify(value),
    });
    const data = await res.json();
    if (data.result === 'false') {
      return false
    } else {
      return true
    }
  } catch (err) {
    return false
  }
}

export default AddDepartment