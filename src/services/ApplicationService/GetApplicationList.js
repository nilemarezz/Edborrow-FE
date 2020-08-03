import env from '../../env'
import ApplicationList from '../../__mock__/RequestList.json'
const GetApplicationList = async () => {
  const response = await fetch(`${process.env.REACT_APP_URL}request`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
  const data = await response.json();
  console.log(data)
  return data.data
}

export default GetApplicationList