
import DashboardMock from '../../__mock__/Dashboard.json'
import env from '../../env'
const GetDashboard = async (formData) => {
  try {
    const res = await fetch(`${env.url}data/dashboard`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
      body: formData,
    });
    const data = await res.json()
    return data.data
  } catch (err) {
    return false
  }
}
export default GetDashboard;
