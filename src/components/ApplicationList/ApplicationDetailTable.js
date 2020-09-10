import React from 'react'
import MUIDataTable from "mui-datatables";
import { ApplicationDetailColumn, OptionApplicationDetailTable } from '../../utilities/Table/OptionApplicationDetailItemTable'
class ApplicationTable extends React.Component {
  render() {
    const columns = ApplicationDetailColumn()
    const item = this.props.itemList
    return (
      <div style={{ padding: "20px 50px" }}>

        <MUIDataTable
          title={"Items"}
          data={item}
          columns={columns}
          options={OptionApplicationDetailTable}
        />
      </div>
    )
  }
}

export default ApplicationTable