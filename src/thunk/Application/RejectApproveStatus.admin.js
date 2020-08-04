import { loadingApplicationList, changeApproveStatus } from '../../actions/ApplicationList.admin'
import RejectApproveStatusService from '../../services/ApplicationService/RejectApproveStatus.admin'
export const RejectApproveStatus = (text, itemId, requestId, value) => {
  return async (dispatch, getState) => {
    dispatch(loadingApplicationList(true));
    const data = await RejectApproveStatusService({
      text: text,
      requestId: requestId,
      itemId: itemId,
      type: "departmant"

    })
    if (data === "true") {
      dispatch(loadingApplicationList(false));
      return true
    } else {
      dispatch(loadingApplicationList(false));
      return false
    }
  };
};
