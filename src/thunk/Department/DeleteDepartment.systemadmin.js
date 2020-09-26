import { loadingDepartmentList, deleteDepartment } from '../../actions/AddDepartmantForm';
import DeleteDepartment from '../../services/DepartmentService/DeleteDepartment.systemdata'
export const DeleteDepartmnet = ({ departmentId, userId }) => {
  return async (dispatch, getState) => {
    dispatch(loadingDepartmentList(true));
    const isSuccess = await DeleteDepartment(userId, departmentId)
    if (isSuccess) {
      setTimeout(
        () => {
          dispatch(deleteDepartment(departmentId))
          dispatch(loadingDepartmentList(false));

        }, 1500)
      return true
    } else {
      setTimeout(
        () => {
          dispatch(loadingDepartmentList(false));

        }, 1500)
      return false
    }
  }
}