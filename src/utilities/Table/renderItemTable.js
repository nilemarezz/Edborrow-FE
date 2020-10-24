import React from "react";
import Chip from "@material-ui/core/Chip";
import { color as themeColor } from '../data/color'
import { BorrowingStatus } from '../../systemdata/BorrowingStatus'
import { ApproveStatus } from '../../systemdata/ApproveStatus'
import { OwnerApproveStatus } from '../../systemdata/OwnerApproveStatus'
import { ItemStatus } from '../../systemdata/ItemStatus'

export const renderDepartment = (department, owner) => {
  if (department === null) {
    return owner;
  } else {
    return department;
  }
};
export const renderStatus = (value) => {
  let label;
  let bgcolor;

  if (value === "Fixing") {
    label = ItemStatus.Fixing.label;
    bgcolor = ItemStatus.Fixing.color
  } else if (value === "Out of Stock") {
    label = "Out of Stock";
    bgcolor = "grey"
  }
  else {
    label = ItemStatus.Avaliable.label;
    bgcolor = ItemStatus.Avaliable.color
  }
  return (
    <div>
      {" "}
      <Chip className="status" label={label} style={{ backgroundColor: bgcolor, color: "white" }} />
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
  let bgcolor;
  let tool;
  if (value === ApproveStatus.Waiting.id) {
    label = ApproveStatus.Waiting.label;
    bgcolor = ApproveStatus.Waiting.color
    tool = ApproveStatus.Waiting.tool
  } else if (value === ApproveStatus.Approve.id) {
    label = ApproveStatus.Approve.label;
    bgcolor = ApproveStatus.Approve.color
    tool = ApproveStatus.Approve.tool
  } else if (value === ApproveStatus.Reject.id) {
    label = ApproveStatus.Reject.label;
    bgcolor = ApproveStatus.Reject.color
    tool = ApproveStatus.Reject.tool
  } else {
    label = ApproveStatus.Expire.label;
    bgcolor = ApproveStatus.Expire.color
    tool = ApproveStatus.Expire.tool
  }
  return (
    <Chip
      label={label}
      style={{ backgroundColor: bgcolor, color: "white" }}
    />
  );
};

export const renderItemStatus = (value) => {
  let label;
  let bgcolor;
  let tool;
  if (value === null) {
    label = "Waiting";
    bgcolor = themeColor.yellow;
    tool = "Waiting for advisor approve";
  }
  else if (value === BorrowingStatus.InUse.id) {
    label = BorrowingStatus.InUse.label;
    bgcolor = themeColor.blue
    tool = BorrowingStatus.InUse.tool;
  } else if (value === BorrowingStatus.Return.id) {
    label = BorrowingStatus.Return.label;
    bgcolor = BorrowingStatus.Return.color;
    tool = BorrowingStatus.Return.tool;
  } else if (value === BorrowingStatus.Late.id) {
    label = BorrowingStatus.Late.label;
    bgcolor = BorrowingStatus.Late.color;
    tool = BorrowingStatus.Late.tool;
  } else if (value === BorrowingStatus.WaitForApprove.id) {
    label = BorrowingStatus.WaitForApprove.label;
    bgcolor = BorrowingStatus.WaitForApprove.color;
    tool = BorrowingStatus.WaitForApprove.tool;
  } else if (value === BorrowingStatus.NotPickUp.id) {
    label = BorrowingStatus.NotPickUp.label;
    bgcolor = BorrowingStatus.NotPickUp.color;
    tool = BorrowingStatus.NotPickUp.tool;
  } else if (value === BorrowingStatus.AdvisorReject.id) {
    label = BorrowingStatus.AdvisorReject.label;
    bgcolor = BorrowingStatus.AdvisorReject.color;
    tool = BorrowingStatus.AdvisorReject.tool;
  } else {
    label = BorrowingStatus.OwnerReject.label;
    bgcolor = BorrowingStatus.OwnerReject.color;
    tool = BorrowingStatus.OwnerReject.tool;
  }

  return (
    <Chip
      label={label}
      style={{ backgroundColor: bgcolor, color: "white" }}
    />
  )
};



export const renderItemDetailApplicationStatus = (value) => {
  let label;
  let bgcolor;
  let tool;
  if (value === OwnerApproveStatus.Waiting.id) {
    label = OwnerApproveStatus.Waiting.label;
    bgcolor = OwnerApproveStatus.Waiting.color
    tool = OwnerApproveStatus.Waiting.tool
  } else if (value === OwnerApproveStatus.Reject.id) {
    label = OwnerApproveStatus.Reject.label;
    bgcolor = OwnerApproveStatus.Reject.color
    tool = OwnerApproveStatus.Reject.tool
  } else if (value === OwnerApproveStatus.AdvisorReject.id) {
    label = OwnerApproveStatus.AdvisorReject.label;
    bgcolor = OwnerApproveStatus.AdvisorReject.color
    tool = OwnerApproveStatus.AdvisorReject.tool
  } else {
    label = OwnerApproveStatus.Approve.label;
    bgcolor = OwnerApproveStatus.Approve.color
    tool = OwnerApproveStatus.Approve.tool
  }
  return (
    <Chip
      label={label}
      style={{ backgroundColor: bgcolor, color: "white" }}
    />
  );
};