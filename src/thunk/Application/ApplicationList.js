import { getApplicationList, loadingApplicationList } from '../../actions/ApplicationList'
import GetApplicationListService from '../../services/ApplicationService/GetApplicationList'

export const GetApplicationList = (value) => {
  return async (dispatch, getState) => {
    dispatch(loadingApplicationList(true));
    const item = await GetApplicationListService()
    setTimeout(
      () => {

        dispatch(getApplicationList(item))
        dispatch(loadingApplicationList(false));

      }, 1500)
    return true
  };
};
