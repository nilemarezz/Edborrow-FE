

import DepartmentList from '../../__mock__/DepartmentList.json'
import env from '../../env'
const GetDashboard = async (formData) => {
  try {
    const res = await fetch(`${env.url}data/department`, {
      method: "GET",
    });
    const data = await res.json()
    return data.data
  } catch (err) {
    return false
  }

};
export default GetDashboard;
