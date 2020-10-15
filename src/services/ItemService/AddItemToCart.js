import DisabledDate from '../../__mock__/DisabledDate.json'
import env from '../../env'
const AddItemToCart = async (value) => {
  if (process.env.REACT_APP_ENV === "production") {
    const res = await fetch(`${env.url}items/getColumn/unavaliable?itemId=${value}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      }
    });
    const data = await res.json()
    return data
  } else {
    return DisabledDate
  }
};
export default AddItemToCart;
