import env from '../../env'

const RejectApproveStatus = async (value) => {
  if (process.env.REACT_APP_ENV === "production") {
    const response = await fetch(
      `https://edborrow.ga/api/request/rejectpurpose`,
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
  } else {
    return true
  }
}

export default RejectApproveStatus