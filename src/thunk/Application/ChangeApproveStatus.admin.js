import { loadingApplicationList, changeApproveStatus } from '../../actions/ApplicationList.admin'
import ChangeApproveStatusService from '../../services/ApplicationService/ChangeApproveStatus.admin'
export const ChangeApproveStatus = (itemId, requestId, value) => {
  return async (dispatch, getState) => {
    dispatch(loadingApplicationList(true));
    const data = await ChangeApproveStatusService({
      requestId: requestId,
      itemId: itemId,
      itemApprove: value
    })
    if (data === true) {
      setTimeout(
        () => {

          dispatch(changeApproveStatus({ itemId, requestId, value }))
          dispatch(loadingApplicationList(false));

        }, 1500)
      return true
    } else {
      setTimeout(
        () => {

          dispatch(loadingApplicationList(false));

        }, 1500)
      return false
    }
  };
};
