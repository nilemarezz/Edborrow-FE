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

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`
class Dashboard extends React.Component {
  state = { loading: false, data: { lastestBorrow: [], mostBorrow: {}, countmonth: [], waiting: 0, items: 0, late: 0 } }
  componentDidMount() {
    this.getDashboardData()
  }
  getDashboardData = async () => {
    this.setState({ loading: true })
    const data = await GetDashboardService()
    this.setState({ data: data })
    this.setState({ loading: false })
  }

  render() {
    console.log(this.state.data)
    return (
      <>
        <WithLoading loading={this.state.loading} />
        <Container>
          <DashboardBox title="Waiting for Approve" unit="Application"
            color={color.red}
            icon={<QueryBuilderIcon style={{ width: 50, height: 50, color: 'white' }} />} value={this.state.data.waiting} />
          <DashboardBox title="Return Late" unit="items" color={color.yellow} icon={<WarningIcon style={{ width: 50, height: 50, color: 'white' }} />} value={this.state.data.late} />
          <DashboardBox title="Items" unit="items" color={color.green} icon={<LibraryBooksIcon style={{ width: 50, height: 50, color: 'white' }} />} value={this.state.data.items} />
          <Grid container style={{ marginTop: 20 }} spacing={3}>
            <Grid item xs={12} sm={8}>
              <LineChart title="Borrow Request Frequency" data={this.state.data.countmonth} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <RecentItem data={this.state.data.lastestBorrow} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Doughnut />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Barchart data={this.state.data.mostBorrow} />
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default Dashboard;
