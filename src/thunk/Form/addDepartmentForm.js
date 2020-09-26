import { loadingSubmitForm, sendDepartmentForm, resetForm } from '../../actions/AddDepartmantForm';
import AddDepartmentService from '../../services/DepartmentService/AddDepartmentService.systemadmin'
export const AddDepartment = (value) => {
  return async (dispatch, getState) => {
    dispatch(loadingSubmitForm(true));
    const sentData = await AddDepartmentService(value)
    if (sentData === true) {
      setTimeout(
        () => {
          dispatch(sendDepartmentForm())

          dispatch(resetForm())
          dispatch(loadingSubmitForm(false));
        }, 1500)
      return true
    } else {
      setTimeout(
        () => {
          dispatch(loadingSubmitForm(false));

        }, 1500)
      return false
    }
  }
}