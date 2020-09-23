import env from '../../env'

const AdvisorRejectPurpose = async (text, id, itemId, type) => {
  if (process.env.REACT_APP_ENV === "production") {
    const response = await fetch(`${env.url}request/rejectpurpose`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
      body: JSON.stringify({
        text: text,
        requestId: id,
        itemId: itemId,
        type: type,
      }),
    });
    const data = await response.json();
    return true
  } else {
    return true
  }
}

export default AdvisorRejectPurpose