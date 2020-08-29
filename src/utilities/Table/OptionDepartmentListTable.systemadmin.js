import React from 'react'
import { department } from '../../systemdata/Department'
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
export const OptionDrpartmentTable = {
  selectableRows: false,
  selectableRowsOnClick: true,
  responsive: "scrollMaxHeight",
  expandableRows: true,
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10, 20, 50],
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
                      <p>Name</p>
                      <p>Telephone No : </p>
                      <p>Building : </p>
                    </div>
                  </Grid>
                  <Grid item sm={6} xs={3}>
                    <div style={{ paddingLeft: 20 }}>
                      <p>: &nbsp;&nbsp;{rowData[4] || "-"}</p>
                      <p>: &nbsp;&nbsp;{rowData[5] || "-"}</p>
                      <p>: &nbsp;&nbsp;{rowData[6] || "-"}</p>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={6} xs={6}>
                <Grid container>
                  <Grid item sm={3} xs={3}>
                    <div style={{ float: "right" }}>
                      <p>Floor</p>
                      <p>Room</p>
                    </div>
                  </Grid>
                  <Grid item sm={9} xs={6}>
                    <div style={{ paddingLeft: 20 }}>
                      <p>: &nbsp;&nbsp;{rowData[7] || "-"}</p>
                      <p>: &nbsp;&nbsp;{rowData[8] || "-"}</p>
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


export const DepartmentTable = () => [
  { name: department.departmentId.name, label: department.departmentId.label },
  { name: department.departmentName.name, label: department.departmentName.label },
  { name: department.departmentEmail.name, label: department.departmentEmail.label },
  {
    name: department.userId.name, label: department.userId.label
  },
  {
    name: department.Name.name, label: department.Name.label, options: {
      display: false,
    }
  },
  {
    name: department.departmentTelNo.name, label: department.departmentTelNo.label, options: {
      display: false,
    },
  },
  {
    name: department.placeBuilding.name, label: department.placeBuilding.label, options: {
      display: false,
    },
  },
  {
    name: department.placeFloor.name, label: department.placeFloor.label, options: {
      display: false,
    },
  },
  {
    name: department.placeRoom.name, label: department.placeRoom.label, options: {
      display: false,
    },
  },
  {
    name: department.departmentId.name, label: " ", options: {
      filter: false,
      searchable: false,
      sort: false,
      download: false,
      viewColumns: false,
      customBodyRender: (value, tableMeta) => (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button variant="contained" color="primary" >
            <EditIcon />
          </Button>
          <Button variant="contained" color="secondary" >
            <DeleteForeverIcon />
          </Button>

        </div>)

    }
  },

]
