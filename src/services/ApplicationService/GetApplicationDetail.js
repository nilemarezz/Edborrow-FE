import env from '../../env'
import ApplicationList from '../../__mock__/RequestDetail.json'
const GetApplicationDetail = async (value) => {
  if (process.env.REACT_APP_ENV === "production") {
    const response = await fetch(`${env.url}request/detail/${value}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    const data = await response.json();
    return data.data
  } else {
    return ApplicationList.data
  }

}

export default GetApplicationDetail