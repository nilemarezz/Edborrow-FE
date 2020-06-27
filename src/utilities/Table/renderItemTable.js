import React from "react";
import Chip from "@material-ui/core/Chip";
import{ color as themeColor} from '../data/color'
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
      <Chip label={label} style={{ backgroundColor: bgcolor, color: color }} />
    </div>
  );
};


export const renderCategory = (value) =>{
  if(value === 1){
    return "General"
  }else{
    return "Electronic"
  }
}