import { loadingDepartmentList, deleteDepartment } from '../../actions/AddDepartmantForm';
import DeleteDepartment from '../../services/DepartmentService/DeleteDepartment.systemdata'
export const DeleteDepartmnet = ({ departmentId, userId }) => {
  return async (dispatch, getState) => {
    dispatch(loadingDepartmentList(true));
    const isSuccess = await DeleteDepartment(userId, departmentId)
    console.log(departmentId, userId)
    if (isSuccess) {
      dispatch(deleteDepartment(departmentId))
      dispatch(loadingDepartmentList(false));
      return true
    } else {
      dispatch(loadingDepartmentList(false));
      return false
    }
  }
}