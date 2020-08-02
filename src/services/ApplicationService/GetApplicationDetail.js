import env from '../../env'
import ApplicationList from '../../__mock__/RequestDetail.json'
const GetApplicationDetail = async (value) => {
  // const response = await fetch(`${env}request/detail/${value}`, {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${localStorage.getItem("userToken")}`,
  //   },
  // });
  // const data = await response.json();
  return ApplicationList.data
}

export default GetApplicationDetail