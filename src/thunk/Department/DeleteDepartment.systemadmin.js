import { loadingDepartmentList, deleteDepartment } from '../../actions/AddDepartmantForm';
import DeleteDepartment from '../../services/DepartmentService/DeleteDepartment.systemdata'
export const DeleteDepartmnet = (value) => {
  return async (dispatch, getState) => {
    dispatch(loadingDepartmentList(true));
    const isSuccess = await DeleteDepartment(value)
    if (isSuccess) {
      dispatch(deleteDepartment(value))
      dispatch(loadingDepartmentList(false));
      return true
    } else {
      dispatch(loadingDepartmentList(false));
      return false
    }
  }
}