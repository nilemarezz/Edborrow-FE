const DeleteDepartment = async (userId, departmentId) => {
  if (process.env.REACT_APP_ENV === "production") {
    try {
      const res = await fetch(`${process.env.REACT_APP_URL}admin/department`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
        body: JSON.stringify({ userId, departmentId }),
      });
      const data = await res.json();
      console.log(data)
      if (data.result === 'false') {
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
}

export default DeleteDepartment