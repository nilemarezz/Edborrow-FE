import env from '../../env'
import ApplicationList from '../../__mock__/RequestList.json'
const GetApplicationList = async () => {

  const response = await fetch(`${env.url}request`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
  const data = await response.json();
  return data.data
}

export default GetApplicationList