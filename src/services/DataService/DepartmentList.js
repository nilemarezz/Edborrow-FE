

import DepartmentList from '../../__mock__/DepartmentList.json'
const GetDashboard = async (formData) => {
  if (process.env.REACT_APP_ENV === "production") {
    try {
      const res = await fetch(`${process.env.REACT_APP_URL}data/department`, {
        method: "GET",
      });
      const data = await res.json()
      console.log(data)
      return data.data
    } catch (err) {
      return false
    }
  } else {
    return DepartmentList.data
  }
};
export default GetDashboard;
