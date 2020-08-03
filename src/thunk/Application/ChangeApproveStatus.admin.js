import { loadingApplicationList, changeApproveStatus } from '../../actions/ApplicationList.admin'
import ChangeApproveStatusService from '../../services/ApplicationService/ChangeApproveStatus.admin'
export const ChangeApproveStatus = (itemId, requestId, value) => {
  return async (dispatch, getState) => {
    dispatch(loadingApplicationList(true));
    // call service
    // await ChangeApproveStatusService({
    //   requestId: requestId,
    //   itemId: itemId,
    //   itemBorrowingStatusId: value
    // })
    dispatch(changeApproveStatus({ itemId, requestId, value }))
    dispatch(loadingApplicationList(false));
    return true
  };
};
