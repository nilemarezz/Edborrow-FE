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

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`
class Dashboard extends React.Component {
  render() {
    return (
      <>
        <Container>
          <DashboardBox title="Waiting for Approve" unit="Application"
            color={color.red}
            icon={<QueryBuilderIcon style={{ width: 50, height: 50, color: 'white' }} />} value={5} />
          <DashboardBox title="Items" unit="items" color={color.green} icon={<LibraryBooksIcon style={{ width: 50, height: 50, color: 'white' }} />} value={20} />
          <DashboardBox title="Return Late" unit="items" color={color.yellow} icon={<WarningIcon style={{ width: 50, height: 50, color: 'white' }} />} value={2} />
          <Grid container style={{ marginTop: 20 }} spacing={3}>
            <Grid item xs={12} sm={8}>
              <LineChart title="Borrow Request Frequency" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <RecentItem />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Doughnut />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Barchart />
            </Grid>
          </Grid>


        </Container>

      </>
    );
  }
}

export default Dashboard;
