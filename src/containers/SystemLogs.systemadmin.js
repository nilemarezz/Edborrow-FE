import React from 'react'
import GetLogs from '../services/DataService/SystemLogs'
import MUIDataTable from "mui-datatables";
import { withSnackbar } from "notistack"
import { LogsColumn, OptionLogsTable } from '../utilities/Table/OptionSystemLogs.systemadmin'
import config from '../env'
import socketIOClient from "socket.io-client";
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
        variant: 'error',
      });
    }
  }
  componentDidMount() {

    this.getLogs()
    const socket = socketIOClient(config.socket);
    socket.on("updateLogs", data => {
      console.log('logs')
      this.getLogs()
    });
  }
  render() {
    const columns = LogsColumn()
    return (
      <div style={{ marginTop: '8%' }}>
        <MUIDataTable
          title="Logs"
          data={this.state.data}
          columns={columns}
          options={OptionLogsTable}
        />
      </div>
    )
  }
}

export default withSnackbar(SystemLogs)