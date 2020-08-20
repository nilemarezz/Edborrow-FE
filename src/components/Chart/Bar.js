import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import Paper from '@material-ui/core/Paper';



const Bar = (props) => {
  console.log(props)
  const data = {
    labels: props.data.itemName,
    datasets: [
      {
        label: "Number of borrowing item",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: props.data.borrowTime
      }
    ]
  };

  return (
    <Paper style={{ padding: 10 }} >

      <HorizontalBar data={data} height={120} options={{
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true,
              min: 0,
              max: props.data.borrowTime ? props.data.borrowTime[0] + 1 : null
            }
          }]
        }
      }} />
    </Paper>
  );
};

export default Bar
