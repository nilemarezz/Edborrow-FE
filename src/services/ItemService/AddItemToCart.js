import DisabledDate from '../../__mock__/DisabledDate.json'

const AddItemToCart = async (value) => {
  if (process.env.REACT_APP_ENV === "production") {
    console.log('production')
    const res = await fetch(`${process.env.REACT_APP_URL}items/getColumn/unavaliable?itemId=${value}`, {
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
