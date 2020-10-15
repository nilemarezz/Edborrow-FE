

import DepartmentList from '../../__mock__/DepartmentList.json'
import env from '../../env'
const GetDashboard = async (formData) => {
  if (process.env.REACT_APP_ENV === "production") {
    try {
      const res = await fetch(`${env.url}data/department`, {
        method: "GET",
      });
      const data = await res.json()
      return data.data
    } catch (err) {
      return false
    }
  } else {
    return DepartmentList.data
  }
};
export default GetDashboard;
