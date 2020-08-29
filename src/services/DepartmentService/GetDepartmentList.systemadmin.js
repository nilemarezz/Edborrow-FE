import Mock from '../../__mock__/DepartmentList.systemadmin.json'
const GetDepartmentList = async () => {
  if (process.env.REACT_APP_ENV === "production") {
    try {
      const res = await fetch(`${process.env.REACT_APP_URL}admin/department`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      const data = await res.json();
      if (data.result === 'false') {
        return false
      } else {
        return data.data
      }
    } catch (err) {
      return false
    }
  } else {
    return Mock.data
  }
}

export default GetDepartmentList