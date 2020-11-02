import env from '../../env'

const AdvisorRejectPurpose = async (text, id, itemId, type) => {
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
}


export default AdvisorRejectPurpose