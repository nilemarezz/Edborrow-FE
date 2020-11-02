import env from '../../env'
import GetAdvisorListMock from '../../__mock__/getAdvisorList.json'
const GetAdvisorList = async () => {
  try {

    const res = await fetch(`${env.url}users/list/advisor`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      }
    });
    const datares = await res.json();
    return datares;


  } catch (err) {
    return false;
  }
};
export default GetAdvisorList;
