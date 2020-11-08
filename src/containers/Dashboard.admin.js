import React from "react";
import Title from '../components/Title'
import DashboardBox from '../components/DashboardBox.admin'
import styled from 'styled-components'
import { color } from '../utilities/data/color'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import WarningIcon from '@material-ui/icons/Warning';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LineChart from '../components/Chart/Line'
import Grid from '@material-ui/core/Grid'
import RecentItem from '../components/Chart/RecentItem'
import Barchart from '../components/Chart/Bar'
import Doughnut from '../components/Chart/Doughnut'
import WithLoading from '../utilities/WithLoading'
import GetDashboardService from '../services/DataService/GetDashboard'
import { connect } from 'react-redux'
import config from '../env'
import socketIOClient from "socket.io-client";


const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`

class Dashboard extends React.Component {
  state = { loading: false, data: { lastestBorrow: [], mostBorrow: {}, countmonth: [], waiting: 0, items: 0, late: 0 } }
  componentDidMount() {
    // if (localStorage.getItem('userToken') === "undefined" || localStorage.getItem('userToken') === undefined) {
    //   localStorage.removeItem('userToken')
    //   window.location.replace(process.env.REACT_APP_ENV === "develop" ? "http://localhost:3001/#/login" : "https://edborrow.netlify.app/#/login")
    // }
    this.props.getData()
    const socket = socketIOClient(config.socket);
    socket.on("updateDashboard", data => {
      this.props.getData()
    });
  }
  // getDashboardData = async () => {
  //   this.setState({ loading: true })
  //   const data = await GetDashboardService()
  //   this.setState({ data: data })
  //   this.setState({ loading: false })
  // }

  render() {
    if (this.props.dashboard.Data === null) {
      return null
    } else {
      return (
        <div style={{ marginTop: '5%' }}>
          <WithLoading loading={this.props.dashboard.loading} />
          <Container>
            <DashboardBox title="Waiting for Approve" unit="Application"
              color={color.red}
              icon={<QueryBuilderIcon style={{ width: 50, height: 50, color: 'white' }} />} value={this.props.dashboard.Data.waiting} />
            <DashboardBox title="Return Late" unit="items" color={color.yellow} icon={<WarningIcon style={{ width: 50, height: 50, color: 'white' }} />} value={this.props.dashboard.Data.late} />
            <DashboardBox title="Items" unit="items" color={color.green} icon={<LibraryBooksIcon style={{ width: 50, height: 50, color: 'white' }} />} value={this.props.dashboard.Data.items} />
            <Grid container style={{ marginTop: 20 }} spacing={3}>
              <Grid item xs={12} sm={8}>
                <LineChart title="Borrow Request Frequency" data={this.props.dashboard.Data.countmonth} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <RecentItem data={this.props.dashboard.Data.lastestBorrow} />
              </Grid>
              {/* <Grid item xs={12} sm={4}>
                <Doughnut />
              </Grid> */}
              <Grid item xs={12} sm={8}>
                <Barchart data={this.props.dashboard.Data.mostBorrow} />
              </Grid>
            </Grid>
          </Container>
        </div>
      );
    }
  }

}
const mapStateToProps = (state) => {
  return { dashboard: state.Dashboard };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  getData: async (value) => {
    dispatch({ type: "LOADING_DASHBOARD", payload: true })
    const data = await GetDashboardService()
    dispatch({ type: "GET_DASHBOARD", payload: data })
    dispatch({ type: "LOADING_DASHBOARD", payload: false })

  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
