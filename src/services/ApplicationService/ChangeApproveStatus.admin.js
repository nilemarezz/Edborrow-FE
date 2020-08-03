import env from '../../env'

const ChangeApproveStatus = async (value) => {
  const response = await fetch(`${env.url}request/approve`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
    body: JSON.stringify(value),
  });
  const data = await response.json();
  console.log(data);
  return true;
}

export default ChangeApproveStatus