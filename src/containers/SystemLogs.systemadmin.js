import React from 'react'
import GetLogs from '../services/DataService/SystemLogs'
import MUIDataTable from "mui-datatables";
import { withSnackbar } from "notistack"
import { LogsColumn, OptionLogsTable } from '../utilities/Table/OptionSystemLogs.systemadmin'
class SystemLogs extends React.Component {
  state = { data: [], loading: false }
  getLogs = async () => {
    this.setState({ loading: true })
    const data = await GetLogs()
    if (data) {
      this.setState({ loading: false, data: data })
    }
    else {
      this.setState({ loading: false })
      this.props.enqueueSnackbar('Something wrong', {
        variant: 'danger',
      });
    }
  }
  componentDidMount() {
    this.getLogs()
  }
  render() {
    const columns = LogsColumn()
    return (
      <>
        <MUIDataTable
          title="Logs"
          data={this.state.data}
          columns={columns}
          options={OptionLogsTable}
        />
      </>
    )
  }
}

export default withSnackbar(SystemLogs)