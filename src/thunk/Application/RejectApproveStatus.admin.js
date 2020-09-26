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
      setTimeout(
        () => {

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
