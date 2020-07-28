import React from 'react'
import Title from '../components/Title'
import MUIDataTable from "mui-datatables";
import { connect } from 'react-redux'
import { GetApplicationList } from '../thunk/Application/ApplicationList.admin'
import { ApplicationTable } from '../systemdata/Application.admin'
import { ApplicationOptions } from '../utilities/Table/OptionApplicationTable.admin'

class ApplicationList extends React.Component {
  componentDidMount() {
    this.props.GetApplicationList()
  }
  render() {
    console.log(this.props.applicationList)
    const options = ApplicationOptions()
    const columns = [
      { name: ApplicationTable.requestId.name, label: ApplicationTable.requestId.label },
      {
        name: ApplicationTable.itemId.name,
        label: ApplicationTable.itemId.label,
        options: {
          display: false,
        },
      },
      { name: ApplicationTable.itemName.name, label: ApplicationTable.itemName.label },
      { name: ApplicationTable.borrowDate.name, label: ApplicationTable.borrowDate.label },
      { name: ApplicationTable.returnDate.name, label: ApplicationTable.returnDate.label },
      { name: ApplicationTable.itemApprove.name, label: ApplicationTable.itemApprove.label },
      { name: ApplicationTable.itemBorrowingStatusId.name, label: ApplicationTable.itemBorrowingStatusId.label },
    ]
    return (
      <>
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

export default connect(mapStateToProps, { GetApplicationList })(ApplicationList)