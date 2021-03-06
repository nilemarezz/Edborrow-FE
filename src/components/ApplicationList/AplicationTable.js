import React from 'react'
import MUIDataTable from "mui-datatables";
import { ApplicationColumn, OptionApplicationTable } from '../../utilities/Table/OptionApplicationTable'
class ApplicationTable extends React.Component {
  render() {
    const columns = ApplicationColumn(this.props.redirectToDetailPage)
    return (
      <div style={{ padding: "0px 50px" }}>
        <MUIDataTable
          title="Request"
          data={this.props.applicationList}
          columns={columns}
          options={OptionApplicationTable}
        />
      </div>
    )
  }
}

export default ApplicationTable