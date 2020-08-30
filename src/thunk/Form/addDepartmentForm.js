import { loadingSubmitForm, sendDepartmentForm, resetForm } from '../../actions/AddDepartmantForm';
import AddDepartmentService from '../../services/DepartmentService/AddDepartmentService.systemadmin'
export const AddDepartment = (value) => {
  return async (dispatch, getState) => {
    dispatch(loadingSubmitForm(true));
    const sentData = await AddDepartmentService(value)
    console.log(sentData)
    if (sentData === true) {
      dispatch(sendDepartmentForm())

      dispatch(resetForm())
      dispatch(loadingSubmitForm(false));
      return true
    } else {
      dispatch(loadingSubmitForm(false));
      return false
    }
  }
}