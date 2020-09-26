import { getApplicationDetail, loadingApplicationList } from '../../actions/ApplicationList'
import GetApplicationDetailService from '../../services/ApplicationService/GetApplicationDetail'

export const GetApplicationDetail = (id) => {
  return async (dispatch, getState) => {

    dispatch(loadingApplicationList(true));
    const item = await GetApplicationDetailService(id)
    dispatch(getApplicationDetail(item))
    setTimeout(
      () => {


        dispatch(loadingApplicationList(false));

      }, 1500)
    return true
  };
};
