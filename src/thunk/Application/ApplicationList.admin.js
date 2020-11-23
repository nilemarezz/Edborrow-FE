import { getApplicationList, loadingApplicationList } from '../../actions/ApplicationList.admin'
import GetApplicationListService from '../../services/ApplicationService/GetApplicationList.admin'
const getApproveLabel = (value) => {
  if (value === 0) {
    return "Reject"
  } else if (value === 1) {
    return "Approve"
  } else {
    return "Waiting"
  }
}

const getItemStatus = (value) => {
  if (value === 6) {
    return "NOT PICKUP"
  } else if (value === 1) {
    return "IN USE"
  } else if (value === 2) {
    return "RETURN"
  } else if (value === 3) {
    return "LATE"
  }
}
export const GetApplicationList = (value) => {
  return async (dispatch, getState) => {

    dispatch(loadingApplicationList(true));
    const item = await GetApplicationListService()
    item.map(data => {
      data.itemApprove = getApproveLabel(data.itemApprove)
      data.itemBorrowingStatusId = getItemStatus(data.itemBorrowingStatusId)
    })
    console.log(item)
    setTimeout(
      () => {

        dispatch(getApplicationList(item))
        dispatch(loadingApplicationList(false));
      }, 1500)
    return true
  };
};
