import env from '../../env'
import ItemAdmin from '../../__mock__/Item.systemadmin.json'
const GetItems = async (value) => {
  if (process.env.REACT_APP_ENV === "production") {
    const item = await fetch(`${env.url}admin/items`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });

    const data = await item.json();
    console.log(data)
    return data
  } else {
    return ItemAdmin
  }
}
export default GetItems