import env from '../../env'
import MyBorrowItem from '../../__mock__/MyBorrowItem.json'
const GetMyBorrow = async (value) => {
  if (process.env.REACT_APP_ENV === "production") {
    try {
      const response = await fetch(`${env.url}items/myborrow`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      const data = await response.json()
      if (data.result === "success") {
        return data.data
      } else {
        return false
      }
    } catch (err) {
      return false
    }
  } else {
    return MyBorrowItem.data
  }
}
export default GetMyBorrow