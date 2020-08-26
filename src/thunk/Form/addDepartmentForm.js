import { loadingSubmitForm, sendDepartmentForm, resetForm } from '../../actions/AddDepartmantForm';
import AddDepartmentService from '../../services/DepartmentService/AddDepartmentService.systemadmin'
export const AddDepartment = (value) => {
  return async (dispatch, getState) => {
    dispatch(loadingSubmitForm(true));
    console.log(value)
    const sentData = await AddDepartmentService(value)
    if (sentData) {
      dispatch(sendDepartmentForm())
      dispatch(loadingSubmitForm(false));
      dispatch(resetForm())

      return true
    } else {
      dispatch(loadingSubmitForm(false));
      return false
    }
  }
}