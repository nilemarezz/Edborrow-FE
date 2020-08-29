import React from 'react'
import { connect } from 'react-redux'
import { GetDepartment } from '../thunk/Department/getDepartment.systemadmin'
import MUIDataTable from "mui-datatables";
import { DepartmentTable, OptionDrpartmentTable } from '../utilities/Table/OptionDepartmentListTable.systemadmin'
class DeparmentList extends React.Component {
  componentDidMount() {
    console.log('asdas')
    this.props.GetDepartment()
  }
  render() {
    const columns = DepartmentTable()
    return (
      <>
        <MUIDataTable
          title={"Department"}
          data={this.props.department.departmentList}
          columns={columns}
          options={OptionDrpartmentTable}
        />
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return { department: state.SYSTEM_ADMIN_Department };
};

export default connect(mapStateToProps, { GetDepartment })(DeparmentList)