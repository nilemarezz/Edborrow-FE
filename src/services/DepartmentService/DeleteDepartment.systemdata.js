import env from '../../env'
const DeleteDepartment = async (userId, departmentId) => {

  try {
    const res = await fetch(`${env.url}admin/department`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
      body: JSON.stringify({ userId, departmentId }),
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

export default DeleteDepartment