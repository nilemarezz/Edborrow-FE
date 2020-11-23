import React from 'react'
import { color } from "../data/color";
import { ApplicationTable } from '../../systemdata/Application'
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Grid from "@material-ui/core/Grid";
import { RefactorDate } from '../data/refactorDate'
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { BorrowingStatus } from '../../systemdata/BorrowingStatus'
import { ApproveStatus } from '../../systemdata/ApproveStatus'
import { renderImage } from '../getImage'

const getApproveId = (value) => {
  if (value === "Approve") {
    return 1
  } else if (value === "Reject") {
    return 0
  } else {
    return 2
  }
}

const getItemStatus = (value) => {
  if (value === "NOT PICKUP") {
    return 6
  } else if (value === "IN USE") {
    return 1
  } else if (value === "RETURN") {
    return 2
  } else if (value === "LATE") {
    return 3
  }
}
const ItemApproveToogle = (props) => {
  const { value, tableMeta, changeApproveStatus } = props
  const requestId = tableMeta.rowData[0]
  const itemId = tableMeta.rowData[1]
  const itemApprove = getApproveId(tableMeta.rowData[5])
  console.log(itemApprove)
  // const itemApprove = tableMeta.rowData[5]
  const disabled = itemApprove === 1 || itemApprove === 0 ? true : false

  return (
    <>
      <ToggleButtonGroup
        exclusive
        aria-label="text alignment"
        value={getApproveId(value)}

        onChange={(event, newAlignment) => {
          changeApproveStatus(itemId, requestId, newAlignment)
        }}
        size="small"
        style={{ height: 40 }}
      >
        <ToggleButton
          value={ApproveStatus.Waiting.id}
          aria-label="left aligned"
          style={{
            backgroundColor: getApproveId(value) === ApproveStatus.Waiting.id ? ApproveStatus.Waiting.color : "",
            color: getApproveId(value) === ApproveStatus.Waiting.id ? "white" : "",
          }}
          disabled={disabled}
        >
          <p>{ApproveStatus.Waiting.label}</p>
        </ToggleButton>
        <ToggleButton
          value={ApproveStatus.Approve.id}
          aria-label="centered"
          style={{
            backgroundColor: getApproveId(value) === ApproveStatus.Approve.id ? ApproveStatus.Approve.color : "",
            color: getApproveId(value) === ApproveStatus.Approve.id ? "white" : "",
          }}
          disabled={disabled}
        >
          <p>{ApproveStatus.Approve.label}</p>
        </ToggleButton>
        <ToggleButton
          value={ApproveStatus.Reject.id}
          aria-label="right aligned"
          style={{
            backgroundColor: getApproveId(value) === ApproveStatus.Reject.id ? ApproveStatus.Reject.color : "",
            color: getApproveId(value) === ApproveStatus.Reject.id ? "white" : "",
          }}
          disabled={disabled}
        >
          <p>{ApproveStatus.Reject.label}</p>
        </ToggleButton>
      </ToggleButtonGroup>

    </>
  )
}

const ItemStatusToogle = (props) => {
  const { value, tableMeta, changeBorrowingStatus } = props
  const itemApprove = tableMeta.rowData[5]
  const requestId = tableMeta.rowData[0]
  const itemId = tableMeta.rowData[1]
  const disabled = itemApprove === 2 || itemApprove === 0 ? true : false

  const checkDisabled = () => {
    if (itemApprove === 2 || itemApprove === 0) {
      return true
    } else if (value === 2) {
      return true
    } else {
      return false
    }
  }
  return (
    <>
      <ToggleButtonGroup
        exclusive
        aria-label="text alignment"
        value={value}
        size="small"
        onChange={(event, newAlignment) => {
          changeBorrowingStatus(itemId, requestId, newAlignment)
        }}
        style={{ height: 40 }}
      >
        <ToggleButton
          value={BorrowingStatus.NotPickUp.id}
          aria-label="left aligned"
          style={{
            backgroundColor: getItemStatus(value) === BorrowingStatus.NotPickUp.id ? BorrowingStatus.NotPickUp.color : "",
            color: getItemStatus(value) === BorrowingStatus.NotPickUp.id ? "white" : "",
          }}
          disabled={checkDisabled()}
        >
          <p>{BorrowingStatus.NotPickUp.label}</p>
        </ToggleButton>
        <ToggleButton
          value={BorrowingStatus.InUse.id}
          aria-label="centered"
          style={{
            backgroundColor: getItemStatus(value) === BorrowingStatus.InUse.id ? BorrowingStatus.InUse.color : "",
            color: getItemStatus(value) === BorrowingStatus.InUse.id ? "white" : "",
            width: 70
          }}
          disabled={checkDisabled()}

        >
          <p>{BorrowingStatus.InUse.label}</p>
        </ToggleButton>
        <ToggleButton
          value={BorrowingStatus.Return.id}
          aria-label="right aligned"
          style={{
            backgroundColor: getItemStatus(value) === BorrowingStatus.Return.id ? BorrowingStatus.Return.color : "",
            color: getItemStatus(value) === BorrowingStatus.Return.id ? "white" : "",
            width: 70
          }}
          disabled={checkDisabled()}

        >
          <p>{BorrowingStatus.Return.label}</p>
        </ToggleButton>
        <ToggleButton
          value={BorrowingStatus.Late.id}
          aria-label="right aligned"
          style={{
            backgroundColor: getItemStatus(value) === BorrowingStatus.Late.id ? BorrowingStatus.Late.color : "",
            color: getItemStatus(value) === BorrowingStatus.Late.id ? "white" : "",
            width: 70
          }}
          disabled={checkDisabled()}
        >
          <p>{BorrowingStatus.Late.label}</p>
        </ToggleButton>
      </ToggleButtonGroup>

    </>
  )
}

export const ApplicationOptions = (userId, name, location, purpose, transactiondate) => {
  return {
    filterType: "textField",
    selectableRows: false,
    expandableRows: true,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 50],
    isRowExpandable: (dataIndex, expandedRows) => {
      if (
        expandedRows.data.length > 4 &&
        expandedRows.data.filter((d) => d.dataIndex === dataIndex).length === 0
      )
        return false;
      return true;
    },

    renderExpandableRow: (rowData, rowMeta) => {
      const colSpan = rowData.length + 1;
      return (
        <TableRow>
          <TableCell colSpan={colSpan}>
            <div>
              <Grid container>
                <Grid item sm={6} xs={6}>
                  <Grid container>
                    <Grid item sm={3} xs={3}>
                      <div style={{ float: "right" }}>
                        <p>UserId</p>
                        <p>Name</p>
                        <p>Use Location</p>
                      </div>
                    </Grid>
                    <Grid item sm={6} xs={3}>
                      <div style={{ paddingLeft: 20 }}>
                        <p>: &nbsp;&nbsp;{rowData[7] || "-"}</p>
                        <p>: &nbsp;&nbsp;{rowData[12] || "-"}</p>
                        <p>: &nbsp;&nbsp;{rowData[8] || "-"}</p>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sm={6} xs={6}>
                  <Grid container>
                    <Grid item sm={3} xs={3}>
                      <div style={{ float: "right" }}>
                        <p>Purpose</p>
                        <p>Borrow Date</p>
                        <p>Return Date</p>
                      </div>
                    </Grid>
                    <Grid item sm={9} xs={6}>
                      <div style={{ paddingLeft: 20 }}>
                        <p>: &nbsp;&nbsp;{rowData[9] || "-"}</p>
                        <p>: &nbsp;&nbsp;{rowData[10] || "-"}</p>
                        <p>: &nbsp;&nbsp;{rowData[11] || "-"}</p>
                        {/* <h4>
                        : {rowData[10].substring(0, 10)}{" "}
                        {rowData[10].substring(11, 19)}
                      </h4> */}
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </TableCell>
        </TableRow>
      );
    },
    onRowsExpand: (curExpanded, allExpanded) =>
      null
  }
}

export const ApplicationColumn = (changeApproveStatus, changeBorrowingStatus) => [
  { name: ApplicationTable.requestId.name, label: ApplicationTable.requestId.label },
  {
    name: ApplicationTable.itemId.name,
    label: ApplicationTable.itemId.label,

  },
  { name: ApplicationTable.itemName.name, label: ApplicationTable.itemName.label },
  {
    name: "itemImage", label: "Image", options: {
      sort: true,
      sortDirection: 'asc',
      filter: false,
      customBodyRender: (value, tableMeta) => <img src={renderImage(value)} alt={"image"} width={60} height={60} />

    }
  },
  {
    name: "amount",
    label: "Amount",
    options: {
      customBodyRender: (value, tableMeta) => <p>x {value}</p>
    }
  },
  {
    name: ApplicationTable.itemApprove.name, label: ApplicationTable.itemApprove.label,

    options: {
      filterType: "dropdown",
      customBodyRender: (value, tableMeta) => (<ItemApproveToogle value={value} tableMeta={tableMeta} changeApproveStatus={changeApproveStatus} />)
    }
  },
  {
    name: ApplicationTable.itemBorrowingStatusId.name, label: ApplicationTable.itemBorrowingStatusId.label,
    options: {
      filterType: "dropdown",
      customBodyRender: (value, tableMeta) => (<ItemStatusToogle value={value} tableMeta={tableMeta} changeBorrowingStatus={changeBorrowingStatus} />)
    }
  },
  {
    name: ApplicationTable.userId.name, label: ApplicationTable.userId.label, options: {
      display: false,
    },
  },
  {
    name: ApplicationTable.usePlace.name, label: ApplicationTable.usePlace.label, options: {
      display: false,
      filter: false
    },
  },
  {
    name: ApplicationTable.borrowPurpose.name, label: ApplicationTable.borrowPurpose.label, options: {
      display: false,
      filter: false
    },
  },
  {
    name: ApplicationTable.borrowDate.name, label: ApplicationTable.borrowDate.label, options: {
      display: false,
      customBodyRender: (value, tableMeta) => RefactorDate(value)
    }
  },
  {
    name: ApplicationTable.returnDate.name, label: ApplicationTable.returnDate.label, options: {
      display: false,
      customBodyRender: (value, tableMeta) => (RefactorDate(value)
      ),
    }
  },
  {
    name: "Name", label: "Name", options: {
      display: false,
      filter: false
    },
  },

]
