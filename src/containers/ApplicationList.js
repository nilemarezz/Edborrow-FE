import React from 'react'
import { changeBorrowRequest } from "../actions/SocketAction"
import ApplicationTable from '../components/ApplicationList/AplicationTable'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { route } from '../systemdata/route'
import WithLoading from '../utilities/WithLoading'
import { GetApplicationList } from '../thunk/Application/ApplicationList'
import socketIOClient from "socket.io-client";
import config from '../env'
class ApplicationList extends React.Component {
  redirectToDetailPage = (value) => {
    this.props.history.push(`${route.detail.applicationDetail}/${value}`)
  }
  componentDidMount() {
    this.props.getApplicationList()
    const socket = socketIOClient(config.socket);
    socket.on("changeApproveAll", data => {
      this.props.changeBorrowRequest(data)
    });
  }

  render() {
    return (
      <div>
        <WithLoading loading={this.props.applicationList.loading} />
        <ApplicationTable applicationList={this.props.applicationList.applicationList} redirectToDetailPage={this.redirectToDetailPage} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { applicationList: state.ApplicationList };
};
export const mapDispatchToProps = (dispatch, ownProps) => ({
  getApplicationList: async () => {
    dispatch(GetApplicationList())
  },
  changeBorrowRequest: async (value) => {
    dispatch(changeBorrowRequest(value))
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ApplicationList))