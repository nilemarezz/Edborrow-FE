import env from '../../env'

const ChangeApproveStatus = async (value) => {
  if (process.env.REACT_APP_ENV === "production") {
    const response = await fetch(`${env.url}request/approve`, {
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
  } else {
    return true
  }
}

export default ChangeApproveStatus