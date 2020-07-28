import React from 'react'
import { renderApproveStatus } from './renderItemTable'
import Button from "@material-ui/core/Button";
import { color } from "../data/color";
import { ApplicationTable } from '../../systemdata/Application'
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Grid from "@material-ui/core/Grid";

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
                        <p>: &nbsp;&nbsp;{userId || "-"}</p>
                        <p>: &nbsp;&nbsp;{name || ""}</p>
                        <p>: &nbsp;&nbsp;{location || "-"}</p>
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
                    <Grid item sm={6} xs={3}>
                      <div style={{ paddingLeft: 20 }}>
                        <p>: &nbsp;&nbsp;{purpose || "-"}</p>
                        <p>: &nbsp;&nbsp;{transactiondate || "-"}</p>
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
      console.log(curExpanded, allExpanded),
  }
}

export const ApplicationColumn = (redirectToDetail) => [
  {
    name: ApplicationTable.requestId.name,
    label: ApplicationTable.requestId.label,
    options: {
      filter: true,
      sort: true,
    },

  },
  {
    name: ApplicationTable.transactionDate.name,
    label: ApplicationTable.transactionDate.label,
    options: {
      filter: true,
      sort: true,
      sortDirection: 'des',
    },
  },
  {
    name: ApplicationTable.requestApprove.name,
    label: ApplicationTable.requestApprove.label,
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value, tableMeta, updateValue) =>
        renderApproveStatus(value),
    },
  },
  {
    name: ApplicationTable.requestId.name,
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value, tableMeta) => (
        <div>
          <Button
            color={color.secondary}
            variant="contained"
            size="small"
            onClick={() => redirectToDetail(value)}
            style={{ marginLeft: 10 }}
          >
            Detail
        </Button>
        </div>
      ),
    }
  }]
