import { loadingApplicationList, changeApproveStatus } from '../../actions/ApplicationList.admin'
import ChangeApproveStatusService from '../../services/ApplicationService/ChangeApproveStatus.admin'
export const ChangeApproveStatus = (itemId, requestId, value) => {
  return async (dispatch, getState) => {
    dispatch(loadingApplicationList(true));
    // call service
    // const data = await ChangeApproveStatusService({
    //   requestId: requestId,
    //   itemId: itemId,
    //   itemApprove: value

    // })
    // const data = true
    // if (data === "true") {
    //   dispatch(changeApproveStatus({ itemId, requestId, value }))
    //   dispatch(loadingApplicationList(false));
    //   return true
    // } else {
    //   dispatch(loadingApplicationList(false));
    //   return false
    // }
    dispatch(changeApproveStatus({ itemId, requestId, value }))
    dispatch(loadingApplicationList(false));
    return true
  };
};
