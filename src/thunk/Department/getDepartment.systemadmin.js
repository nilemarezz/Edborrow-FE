import { loadingDepartmentList, getDepartmentList } from '../../actions/AddDepartmantForm';
import DepartmentListService from '../../services/DepartmentService/GetDepartmentList.systemadmin'
export const GetDepartment = (value) => {
  return async (dispatch, getState) => {
    dispatch(loadingDepartmentList(true));
    console.log(value)
    const department = await DepartmentListService()
    console.log(department)
    if (department) {
      dispatch(getDepartmentList(department))
      dispatch(loadingDepartmentList(false));
      return true
    } else {
      dispatch(loadingDepartmentList(false));
      return false
    }
  }
}