import React from 'react'
import DashboardBox from '../components/DashboardBox.admin'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Grid from '@material-ui/core/Grid';
import { color } from '../utilities/data/color'
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ListAltIcon from '@material-ui/icons/ListAlt';
import BusinessIcon from '@material-ui/icons/Business';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Line } from 'react-chartjs-2';
import OSState from '../__mock__/OSData'

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'CPU Usage',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
class SystemOS extends React.Component {
  intervalID;
  state = { ...OSState }
  getSystemData = async () => {
    const res = await fetch('https://edborrow.ga/api/system/systemdata')
    const data = await res.json()
    this.setState({ systemdata: data.data[0] })
  }
  getOSData = async () => {
    const res = await fetch('https://edborrow.ga/api/system/osdata')
    const data = await res.json()
    this.setState({ os: data.data })
  }
  componentDidMount() {
    this.getSystemData()
    this.getOSData()
    this.getCPU()
  }
  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }
  getCPU = async () => {
    const res = await fetch("https://edborrow.ga/api/system/cpudata")
    const data = await res.json()
    this.setState({ memory: data.data.memory })
    // this.intervalID = setTimeout(this.getCPU, 5000);

  }
  render() {
    const { Items, Users, BorrowRequests, RequestItem, Departments } = this.state.systemdata
    const { arch, type, uptime, hostname, homedir, tmpdir } = this.state.os

    return (
      <div style={{ marginTop: '8%' }}>
        <Grid container spacing={3}>
          <Grid item xs={4} sm={4}>
            <DashboardBox title="Items" unit="items" color={color.blue} icon={<LibraryBooksIcon style={{ width: 50, height: 50, color: 'white' }} />} value={Items} />
          </Grid>
          <Grid item xs={4} sm={4}>
            <DashboardBox title="Users" unit="person" color={color.green} icon={<AccessibilityIcon style={{ width: 50, height: 50, color: 'white' }} />} value={Users} />
          </Grid>
          <Grid item xs={4} sm={4}>
            <DashboardBox title="BorrowRequests" unit="request" color={color.yellow} icon={<ReceiptIcon style={{ width: 50, height: 50, color: 'white' }} />} value={BorrowRequests} />
          </Grid>
          <Grid item xs={4} sm={4}>
            <DashboardBox title="RequestItems" unit="request" color={color.red} icon={<ListAltIcon style={{ width: 50, height: 50, color: 'white' }} />} value={RequestItem} />
          </Grid>
          <Grid item xs={4} sm={4}>
            <DashboardBox title="Departments" unit="units" color={color.darkgrey} icon={<BusinessIcon style={{ width: 50, height: 50, color: 'white' }} />} value={Departments} />
          </Grid>
        </Grid>

        {/* <Grid container spacing={3}>
          <Grid item xs={7} sm={7}>
            <Line data={data} height={120} />
          </Grid>

          <Grid item xs={5} sm={5}>
            <h2>Server</h2>
            <ul>
              <li>arch : {arch}</li>
              <li>type : {type}</li>
              <li>uptime : {uptime / 60} minute</li>
              <li>hostname : {hostname}</li>
              <li>homedir : {homedir}</li>
            </ul>
          </Grid>
        </Grid>
        <h2>Memory : 333 / 900</h2>
        <LinearProgress variant="determinate" value={85} style={{ marginTop: 20, height: 20, borderRadius: 10 }} /> */}


      </div>
    )
  }
}

export default SystemOS