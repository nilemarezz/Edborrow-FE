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

export const renderItemStatus = (value) => {
  let label;
  let color;
  let bgcolor;
  let tool;
  if (value === 1) {
    label = "Avaliable";
    bgcolor = themeColor.blue;
    color = "white";
    tool = "Item are on use";
  } else if (value === 2) {
    label = "Returned";
    bgcolor = themeColor.green;
    color = "white";
    tool = "You already return this item";
  } else if (value === 3) {
    label = "Late";
    bgcolor = themeColor.red
    color = "white";
    tool = "You not return this item on time";
  } else if (value === 4) {
    label = "Waiting for Approve";
    bgcolor = themeColor.yellow;
    color = "white";
    tool = "Waitng for the Item Owner Approve";
  } else if (value === 6) {
    label = "Not Pickup";
    bgcolor = themeColor.grey;
    color = "white";
    tool = "You can pick up the item from the owner";
  } else if (value === 7) {
    label = "Advisor Reject";
    bgcolor = themeColor.darkgrey;
    color = "white";
    tool = "Your Advisor not approve , Please contact your advisor";
  } else {
    label = "Not Aprove";
    bgcolor = themeColor.red;
    color = "white";
    tool = "The Owner Not Approve";
  }

  return (
    <Chip
      label={label}
      style={{ backgroundColor: bgcolor, color: color }}
    />
  )
};



export const renderItemDetailApplicationStatus = (value) => {
  let label;
  let color;
  let bgcolor;
  let tool;
  if (value === 2) {
    label = "Waiting";
    bgcolor = "#ffa000";
    color = "white";
    tool = "Waitng for the Item Owner Approve";
  } else if (value === 0) {
    label = "Not Approve";
    bgcolor = "#d32f2f";
    color = "white";
    tool = "Item Owner not approve the request";
  } else if (value === 3) {
    label = "Advisor Reject";
    bgcolor = "#616161";
    color = "white";
    tool = "Item Owner not approve the request";
  } else {
    label = "Approve";
    bgcolor = "#689f38";
    color = "white";
    tool = "Item Owner approve the request";
  }
  return (
    <Chip
      label={label}
      style={{ backgroundColor: bgcolor, color: color }}
    />
  );
};