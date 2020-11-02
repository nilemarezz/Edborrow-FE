import env from '../../env'
import ItemAdmin from '../../__mock__/Item.systemadmin.json'
const GetItems = async (value) => {

  const item = await fetch(`${env.url}admin/items`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });

  const data = await item.json();
  return data
}
export default GetItems