import React from 'react'
import Title from '../components/Title'
import MUIDataTable from "mui-datatables";
import { connect } from 'react-redux'
import { GetApplicationList } from '../thunk/Application/ApplicationList.admin'
import { ApplicationTable } from '../systemdata/Application'
import { ApplicationOptions, ApplicationColumn } from '../utilities/Table/OptionApplicationTable.admin'

class ApplicationList extends React.Component {
  componentDidMount() {
    this.props.GetApplicationList()
  }
  render() {
    const options = ApplicationOptions()
    const columns = ApplicationColumn()
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