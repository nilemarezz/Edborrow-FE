import { getApplicationList, loadingApplicationList } from '../../actions/ApplicationList.admin'
import GetApplicationListService from '../../services/ApplicationService/GetApplicationList.admin'
export const GetApplicationList = (value) => {
  return async (dispatch, getState) => {
    dispatch(loadingApplicationList(true));
    const item = await GetApplicationListService()
    dispatch(getApplicationList(item))
    dispatch(loadingApplicationList(false));
    return true
  };
};
