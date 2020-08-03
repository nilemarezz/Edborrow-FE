import { loadingApplicationList, changeBorrowingStatus } from '../../actions/ApplicationList.admin'
import ChangeBorrowingStatusService from '../../services/ApplicationService/ChangeBorrowingStatus.admin'
export const ChangeBorrowingStatus = (itemId, requestId, value) => {
  return async (dispatch, getState) => {
    dispatch(loadingApplicationList(true));
    // call service
    // await ChangeBorrowingStatusService({
    //   requestId: requestId,
    //   itemId: itemId,
    //   itemApprove: value
    // })
    dispatch(changeBorrowingStatus({ itemId, requestId, value }))
    dispatch(loadingApplicationList(false));
    return true
  };
};
