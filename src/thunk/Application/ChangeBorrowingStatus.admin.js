import { loadingApplicationList, changeBorrowingStatus } from '../../actions/ApplicationList.admin'
import ChangeBorrowingStatusService from '../../services/ApplicationService/ChangeBorrowingStatus.admin'
export const ChangeBorrowingStatus = (itemId, requestId, value) => {
  return async (dispatch, getState) => {
    dispatch(loadingApplicationList(true));
    await ChangeBorrowingStatusService({
      requestId: requestId,
      itemId: itemId,
      itemBorrowingStatusId: value
    })
    setTimeout(
      () => {

        dispatch(changeBorrowingStatus({ itemId, requestId, value }))
        dispatch(loadingApplicationList(false));

      }, 1500)
    return true
  };
};
