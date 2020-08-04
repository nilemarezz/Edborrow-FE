import env from '../../env'

const ChangeApproveStatus = async (value) => {
  console.log(value)
  const response = await fetch(`${env.url}request/approve`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
    body: JSON.stringify(value),
  });
  const data = await response.json();
  console.log(data)
  if (data.result === "false") {
    return false
  } else {
    return true;
  }

}

export default ChangeApproveStatus