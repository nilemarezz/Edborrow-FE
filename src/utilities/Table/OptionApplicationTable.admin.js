import React from 'react'
import { renderApproveStatus } from './renderItemTable'
import Button from "@material-ui/core/Button";
import { color } from "../data/color";
import { ApplicationTable } from '../../systemdata/Application'
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Grid from "@material-ui/core/Grid";
import { RefactorDate } from '../data/refactorDate'
export const ApplicationOptions = (userId, name, location, purpose, transactiondate) => {
  return {
    filterType: "textField",
    selectableRows: false,
    responsive: "scrollMaxHeight",

    expandableRows: true,

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
      console.log(rowData)
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
                        <p>: &nbsp;&nbsp;{name || "-"}</p>
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
                        <p>Transaction Date</p>
                      </div>
                    </Grid>
                    <Grid item sm={9} xs={6}>
                      <div style={{ paddingLeft: 20 }}>
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

export const ApplicationColumn = () => [
  { name: ApplicationTable.requestId.name, label: ApplicationTable.requestId.label },
  {
    name: ApplicationTable.itemId.name,
    label: ApplicationTable.itemId.label,
    options: {
      display: false,
    },
  },
  { name: ApplicationTable.itemName.name, label: ApplicationTable.itemName.label },
  {
    name: ApplicationTable.borrowDate.name, label: ApplicationTable.borrowDate.label, options: {
      customBodyRender: (value, tableMeta) => (
        <div>
          {RefactorDate(value)}
        </div>
      ),
    }
  },
  {
    name: ApplicationTable.returnDate.name, label: ApplicationTable.returnDate.label, options: {
      customBodyRender: (value, tableMeta) => (RefactorDate(value)
      ),
    }
  },
  { name: ApplicationTable.itemApprove.name, label: ApplicationTable.itemApprove.label },
  { name: ApplicationTable.itemBorrowingStatusId.name, label: ApplicationTable.itemBorrowingStatusId.label },
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
    name: ApplicationTable.transactionDate.name, label: ApplicationTable.transactionDate.label, options: {
      display: false,
      customBodyRender: (value, tableMeta) => (RefactorDate(value)
      ),
    }
  },
]
