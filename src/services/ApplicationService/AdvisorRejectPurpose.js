import env from '../../env'

const AdvisorRejectPurpose = async (text, id, itemId, type) => {
  if (process.env.REACT_APP_ENV === "production") {
    console.log(text, id, itemId, type)
    const response = await fetch(`${env.url}request/approve`, {
      method: "POST",
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
    console.log(data)
    return true
  } else {
    return true
  }
}

export default AdvisorRejectPurpose