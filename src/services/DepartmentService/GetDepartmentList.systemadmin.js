import env from '../../env'
import Mock from '../../__mock__/DepartmentList.systemadmin.json'
const GetDepartmentList = async () => {

  try {
    const res = await fetch(`${env.url}admin/department`, {
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
}

export default GetDepartmentList