import env from '../../env'
import ApplicationList from '../../__mock__/RequestAdmin.json'
const GetApplicationList = async () => {
  if (process.env.REACT_APP_ENV === "production") {
    let res = await fetch(`${env.url}request/admin`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    let data = await res.json();
    return data.data
  } else {
    return ApplicationList.data
  }
}

export default GetApplicationList