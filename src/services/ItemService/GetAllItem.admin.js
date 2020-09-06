import env from '../../env'
import ItemAdmin from '../../__mock__/ItemAdmin.json'
const GetItemDetail = async (value) => {
  if (process.env.REACT_APP_ENV === "production") {
    const item = await fetch(`${env.url}items/admin`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });

    const data = await item.json();
    return data
  } else {
    return ItemAdmin
  }
}
export default GetItemDetail