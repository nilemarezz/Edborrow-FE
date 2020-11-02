import env from '../../env'
import ItemAdmin from '../../__mock__/ItemAdmin.json'
const GetItemDetail = async (value) => {

  const item = await fetch(`${env.url}items/admin`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });

  const data = await item.json();
  return data
}
export default GetItemDetail