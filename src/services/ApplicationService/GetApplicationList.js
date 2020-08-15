import env from '../../env'
import ApplicationList from '../../__mock__/RequestList.json'
const GetApplicationList = async () => {
  if (process.env.REACT_APP_ENV === "production") {
    const response = await fetch(`${process.env.REACT_APP_URL}request`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });
    const data = await response.json();
    return data.data
  } else {
    console.log('in')
    return ApplicationList.data
  }
}

export default GetApplicationList