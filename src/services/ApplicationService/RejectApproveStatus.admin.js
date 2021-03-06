import env from '../../env'

const RejectApproveStatus = async (value) => {

  const response = await fetch(
    `${env.url}request/rejectpurpose`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(value),
    }
  );
  const data = await response.json();
  if (data.result === "false") {
    return false
  } else {
    return true;
  }
}
export default RejectApproveStatus