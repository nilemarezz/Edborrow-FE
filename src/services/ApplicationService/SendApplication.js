import env from '../../env'

const SendApplication = async (value) => {

  const response = await fetch(`${env.url}request/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
    body: JSON.stringify(value),
  });
  const data = await response.json();
  if (data.result === "false") {
    return false
  } else {
    return true;
  }
}

export default SendApplication