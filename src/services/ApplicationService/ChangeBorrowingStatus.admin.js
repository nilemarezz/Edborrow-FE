import env from '../../env'

const ChangeBorrowingStatus = async (value) => {
  const response = await fetch(
    `${env.url}request/changestatus`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
      body: JSON.stringify(value),
    }
  );
  const data = await response.json();
  return true;
}


export default ChangeBorrowingStatus