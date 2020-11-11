
import env from '../../env'
const GetAmount = async (value) => {
  // const formData = new FormData();
  // formData.append("itemId", value.itemId);
  // formData.append("borrowDate", value.borrowDate);
  // formData.append("borrowDate", value.borrowDate);
  console.log(value)
  try {
    const res = await fetch(`${env.url}items/getAvaliableAmount/amount`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value),
    });
    const data = await res.json()
    if (data.result === "success") {
      return data.data
    } else {
      return false
    }
  } catch (err) {
    return false
  }
}
export default GetAmount;
