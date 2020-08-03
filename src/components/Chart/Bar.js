import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import Paper from '@material-ui/core/Paper';

const data = {
  labels: ["VR Controller", "Andrunio", "Electric Charger", "Router WIFI 6", "Micro controller"],
  datasets: [
    {
      label: "Number of borrowing item",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [70, 50, 30, 15, 10, 5, 2]
    }
  ]
};

const Bar = () => {
  return (
    <Paper style={{ padding: 10 }} >

      <HorizontalBar data={data} height={120} />
    </Paper>
  );
};

export default Bar
