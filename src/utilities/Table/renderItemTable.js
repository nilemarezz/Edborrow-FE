import React from "react";
import Chip from "@material-ui/core/Chip";
import { color as themeColor } from '../data/color'
export const renderDepartment = (department, owner) => {
  if (department === null) {
    return owner;
  } else {
    return department;
  }
};
export const renderStatus = (value) => {
  let label;
  let color;
  let bgcolor;

  if (value === 1) {
    label = "Avaliable";
    bgcolor = themeColor.green;
    color = themeColor.white;
  } else {
    label = "Not Avaliable";
    bgcolor = themeColor.red;
    color = themeColor.white;
  }
  return (
    <div>
      {" "}
      <Chip className="status" label={label} style={{ backgroundColor: bgcolor, color: color }} />
    </div>
  );
};


export const renderCategory = (value) => {
  if (value === 1) {
    return "General"
  } else {
    return "Electronic"
  }
}

export const renderApproveStatus = (value) => {
  let label;
  let color;
  let bgcolor;
  let tool;
  if (value === 2) {
    label = "Waiting";
    bgcolor = themeColor.yellow;
    color = "white";
    tool = "Please wait for your advisor Approve"
  } else if (value === 1) {
    label = "Approve";
    bgcolor = themeColor.green;
    color = "white";
    tool = "Please click see more the view the status"
  } else {
    label = "Not Approve";
    bgcolor = themeColor.red;
    color = "white";
    tool = "Your Advisor not Approve , Please try again"
  }
  return (

    <Chip
      label={label}
      style={{ backgroundColor: bgcolor, color: color }}
    />
    // </Grid>
    // <Grid item xs={3} sm={3}>
    //   <Tooltip title={tool} >
    //     <HelpIcon
    //       style={{ marginLeft: 20, width: 20, height: 20, marginTop: 5 }}
    //     />
    //   </Tooltip>
    // </Grid>
    // </Grid>
  );
};