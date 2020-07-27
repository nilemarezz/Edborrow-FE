import env from '../../env'
import ApplicationList from '../../__mock__/ApplicationList.json'
const GetApplicationList = async () => {
  // const response = await fetch(`${env}request`, {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${localStorage.getItem("userToken")}`,
  //   },
  // });
  // const data = await response.json();
  return ApplicationList.data
}

export default GetApplicationList