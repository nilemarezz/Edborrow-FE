
import Logs from '../../__mock__/Logs.json'
const GetLogs = async (formData) => {
  if (process.env.REACT_APP_ENV === "production") {
    try {
      const res = await fetch(`${process.env.REACT_APP_URL}data/logs`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      const data = await res.json()
      return data.data
    } catch (err) {
      return false
    }
  } else {
    return Logs.data
  }
};
export default GetLogs;
