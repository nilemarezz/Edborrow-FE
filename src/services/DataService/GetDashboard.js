
import DashboardMock from '../../__mock__/Dashboard.json'
const GetDashboard = async (formData) => {
  if (process.env.REACT_APP_ENV === "production") {
    try {
      const res = await fetch(`${process.env.REACT_APP_URL}data/dashboard`, {
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
  } else {
    return DashboardMock.data
  }
};
export default GetDashboard;