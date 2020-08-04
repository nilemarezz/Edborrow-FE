import React from 'react'
import { color } from "../data/color";
import { ApplicationTable } from '../../systemdata/Application'
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Grid from "@material-ui/core/Grid";
import { RefactorDate } from '../data/refactorDate'
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const ItemApproveToogle = (props) => {
  const { value, tableMeta, changeApproveStatus } = props
  const requestId = tableMeta.rowData[0]
  const itemId = tableMeta.rowData[1]
  const itemApprove = tableMeta.rowData[4]
  const disabled = itemApprove === 1 || itemApprove === 0 ? true : false
  return (
    <>
      <ToggleButtonGroup
        exclusive
        aria-label="text alignment"
        value={value}

        onChange={(event, newAlignment) => {
          changeApproveStatus(itemId, requestId, newAlignment)
        }}
        size="small"
        style={{ height: 40 }}
      >
        <ToggleButton
          value={2}
          aria-label="left aligned"
          style={{
            backgroundColor: value === 2 ? color.yellow : "",
            color: value === 2 ? "white" : "",
          }}
          disabled={disabled}
        >
          <p>Waiting</p>
        </ToggleButton>
        <ToggleButton
          value={1}
          aria-label="centered"
          style={{
            backgroundColor: value === 1 ? color.green : "",
            color: value === 1 ? "white" : "",
          }}
          disabled={disabled}
        >
          <p>Approve</p>
        </ToggleButton>
        <ToggleButton
          value={0}
          aria-label="right aligned"
          style={{
            backgroundColor: value === 0 ? color.red : "",
            color: value === 0 ? "white" : "",
          }}
          disabled={disabled}
        >
          <p>Reject</p>
        </ToggleButton>
      </ToggleButtonGroup>

    </>
  )
}

const ItemStatusToogle = (props) => {
  const { value, tableMeta, changeBorrowingStatus } = props
  const itemApprove = tableMeta.rowData[4]
  const requestId = tableMeta.rowData[0]
  const itemId = tableMeta.rowData[1]
  const disabled = itemApprove === 2 || itemApprove === 0 ? true : false
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
          value={6}
          aria-label="left aligned"
          style={{
            backgroundColor: value === 2 ? color.yellow : "",
            color: value === 2 ? "white" : "",
          }}
          disabled={disabled}
        >
          <p>Not Pick Up</p>
        </ToggleButton>
        <ToggleButton
          value={1}
          aria-label="centered"
          style={{
            backgroundColor: value === 1 ? color.blue : "",
            color: value === 1 ? "white" : "",
            width: 70
          }}
          disabled={disabled}

        >
          <p>In use</p>
        </ToggleButton>
        <ToggleButton
          value={0}
          aria-label="right aligned"
          style={{
            backgroundColor: value === 0 ? color.green : "",
            color: value === 0 ? "white" : "",
            width: 70
          }}
          disabled={disabled}

        >
          <p>Return</p>
        </ToggleButton>
        <ToggleButton
          value={3}
          aria-label="right aligned"
          style={{
            backgroundColor: value === 3 ? color.red : "",
            color: value === 3 ? "white" : "",
            width: 70
          }}
          disabled={disabled}
        >
          <p>Late</p>
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
      // Prevent expand/collapse of any row if there are 4 rows expanded already (but allow those already expanded to be collapsed)
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
                        <p>: &nbsp;&nbsp;{rowData[6] || "-"}</p>
                        <p>: &nbsp;&nbsp;{name || "-"}</p>
                        <p>: &nbsp;&nbsp;{rowData[7] || "-"}</p>
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
                        <p>Retuen Date</p>
                      </div>
                    </Grid>
                    <Grid item sm={9} xs={6}>
                      <div style={{ paddingLeft: 20 }}>
                        <p>: &nbsp;&nbsp;{rowData[8] || "-"}</p>
                        <p>: &nbsp;&nbsp;{rowData[9] || "-"}</p>
                        <p>: &nbsp;&nbsp;{rowData[10] || "-"}</p>
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
    name: ApplicationTable.transactionDate.name, label: ApplicationTable.transactionDate.label, options: {
      customBodyRender: (value, tableMeta) => (RefactorDate(value)
      ),
    }
  },
  {
    name: ApplicationTable.itemApprove.name, label: ApplicationTable.itemApprove.label,
    options: {
      customBodyRender: (value, tableMeta) => (<ItemApproveToogle value={value} tableMeta={tableMeta} changeApproveStatus={changeApproveStatus} />)
    }
  },
  {
    name: ApplicationTable.itemBorrowingStatusId.name, label: ApplicationTable.itemBorrowingStatusId.label,
    options: {
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
    },
  },
  {
    name: ApplicationTable.borrowPurpose.name, label: ApplicationTable.borrowPurpose.label, options: {
      display: false,
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

]
