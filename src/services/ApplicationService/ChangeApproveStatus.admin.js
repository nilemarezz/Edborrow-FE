import env from '../../env'

const ChangeApproveStatus = async (item) => {
  if (process.env.REACT_APP_ENV === "production") {
    const response = await fetch(`${env.url}request/approve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
      body: JSON.stringify({
        requestId: item.requestId,
        itemId: item.itemId,
        itemApprove: item.itemApprove
      }),
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