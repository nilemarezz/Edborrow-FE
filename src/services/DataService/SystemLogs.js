
import Logs from '../../__mock__/Logs.json'
import env from '../../env'
const GetLogs = async (formData) => {
  if (process.env.REACT_APP_ENV === "production") {
    try {
      const res = await fetch(`${env.url}data/logs`, {
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
