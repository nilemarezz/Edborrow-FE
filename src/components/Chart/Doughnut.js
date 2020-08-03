import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';

const data = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};


class DoughnutComponent extends React.Component {
  render() {
    return (
      <Paper style={{ padding: 10 }}>
        <Doughnut data={data} height={250} />
      </Paper>
    );
  }
} export default DoughnutComponent