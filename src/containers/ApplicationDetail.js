import React from 'react'
import Title from '../components/NewTitle'
import { connect } from 'react-redux'
import ApplicationDetail from '../components/ApplicationList/ApplicationDetail'
import { GetApplicationDetail } from '../thunk/Application/ApplicationDetail'
import WithLoading from '../utilities/WithLoading'
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:3000";
class ApplicationDeatail extends React.Component {
  state = { loading: false }
  componentDidMount() {
    this.setState({ loading: true })
    this.props.getApplication(this.props.match.params.id)
    setTimeout(
      async () => {
        this.setState({ loading: false });
        const socket = socketIOClient(ENDPOINT);
        await socket.on("changeStatus", data => {
          this.props.setStatus(data)
        });
        await socket.on("changeItemApprove", data => {
          console.log('...', data)
          this.props.setApprove(data)
        });
      }, 1500)
  }

  render() {
    const id = this.props.match.params.id
    return (
      <div >
        <WithLoading loading={this.state.loading} />
        <Title title={`Application No. ${id}`} />
        <div style={{ padding: 20 }}>
          <ApplicationDetail detail={this.props.applicaiton} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { applicaiton: state.ApplicationList.applicationDetail }
}

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setStatus: async (value) => {
    dispatch({ type: "CHANGE_STATUS", payload: value });
  },
  getApplication: async (value) => {
    dispatch(GetApplicationDetail(value))
  },
  setApprove: async (value) => {
    dispatch({ type: "CHANGE_APPROVE", payload: value });
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationDeatail)