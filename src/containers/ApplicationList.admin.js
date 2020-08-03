import React from 'react'
import Title from '../components/Title'
import MUIDataTable from "mui-datatables";
import { connect } from 'react-redux'
import { GetApplicationList } from '../thunk/Application/ApplicationList.admin'
import { ChangeApproveStatus } from '../thunk/Application/ChangeApproveStatus.admin'
import { ChangeBorrowingStatus } from '../thunk/Application/ChangeBorrowingStatus.admin'
import { ApplicationOptions, ApplicationColumn } from '../utilities/Table/OptionApplicationTable.admin'
import WithLoading from '../utilities/WithLoading'
class ApplicationList extends React.Component {
  componentDidMount() {
    this.props.GetApplicationList()
  }
  changeApproveStatus = (itemId, requestId, value) => {
    this.props.ChangeApproveStatus(itemId, requestId, value)
  }
  changeBorrowingStatus = (itemId, requestId, value) => {
    this.props.ChangeBorrowingStatus(itemId, requestId, value)
  }

  render() {
    const options = ApplicationOptions()
    const columns = ApplicationColumn(this.changeApproveStatus, this.changeBorrowingStatus)
    return (
      <>
        <WithLoading loading={this.props.loading} />
        <div style={{ marginTop: -30 }}>
          <Title title="Application List" />
        </div>
        <MUIDataTable
          title={"Request List"}
          data={this.props.applicationList}
          columns={columns}
          options={options}
        />
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return { applicationList: state.ADMIN_ApplicationList.applicationList, loading: state.ADMIN_ApplicationList.loading };
};

export default connect(mapStateToProps, { GetApplicationList, ChangeApproveStatus, ChangeBorrowingStatus })(ApplicationList)