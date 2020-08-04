import env from '../../env'
import ApplicationList from '../../__mock__/RequestAdmin.json'
const GetApplicationList = async () => {
  // let res = await fetch(`${env.url}request/admin`, {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${localStorage.getItem("userToken")}`,
  //   },
  // });
  // let data = await res.json();
  // return data.data


  return ApplicationList.data
}

export default GetApplicationList